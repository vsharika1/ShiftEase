import { json, type LoaderFunctionArgs } from '@remix-run/node';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';

interface Employee {
  id: string;
  role: string;
  availability: { start: Date; end: Date }[];
}

interface Shift {
  id: string;
  start: Date;
  end: Date;
  coverageRequirement: {
    name: string;
    roleRequirement: {
      roleName: string;
      roleTargetEmployeeCount: number;
      rolePriority: string;
    }[];
  };
}

async function fetchDataFromDatabase() {
  const users: Employee[] = await prisma.user.findMany({
    select: {
      id: true,
      role: true,
      availability: {
        select: {
          start: true,
          end: true,
        },
      },
    },
  });

  const shifts: Shift[] = (await prisma.shift.findMany({
    include: {
      coverageRequirement: {
        include: {
          roleRequirement: true,
        },
      },
    },
  })) as unknown as Shift[];

  return { users, shifts };
}

const dateTimeFormat = (date: Date) => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  hours: date.getHours(),
  minutes: date.getMinutes(),
});

const isShiftWithinAvailability = (
  shiftStart: Date,
  shiftEnd: Date,
  availability: { start: Date; end: Date }[],
) =>
  availability.some(
    (avail) => shiftStart >= avail.start && shiftEnd <= avail.end,
  );

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await requireAuthedUser(request);
  const { users, shifts } = await fetchDataFromDatabase();

  const userRoles = users.map((user) => user.role);

  const shiftRequirementRoles = shifts.flatMap((shift) =>
    shift.coverageRequirement.roleRequirement.map((req) => req.roleName),
  );

  const allRoleIds = Array.from(
    new Set([...userRoles, ...shiftRequirementRoles]),
  );

  const apiPayload = {
    requestId: 'contact_center_examples',
    solve_parameters: { time_limit: { seconds: 60 } },
    employees: users.map((user) => ({
      id: user.id,
      role_ids: [user.role],
      shiftPreferences: shifts
        .filter((shift) =>
          isShiftWithinAvailability(
            new Date(shift.start),
            new Date(shift.end),
            user.availability,
          ),
        )
        .map((shift) => ({
          shiftId: shift.id,
          preference: 1,
        })),
    })),
    shifts: shifts.map((shift) => ({
      id: shift.id,
      startDateTime: dateTimeFormat(new Date(shift.start)),
      endDateTime: dateTimeFormat(new Date(shift.end)),
    })),
    coverageRequirements: shifts.map((shift) => {
      const roleRequirements = shift.coverageRequirement.roleRequirement.map(
        (role) => {
          const { roleName, roleTargetEmployeeCount, rolePriority } = role;
          return {
            role_id: roleName,
            target_employee_count: roleTargetEmployeeCount,
            priority: rolePriority,
          };
        },
      );
      return {
        shiftIds: [shift.id],
        roleRequirements,
      };
    }),
    role_ids: allRoleIds,
  };

  console.log(JSON.stringify(apiPayload));

  const apiKey = process.env.GOOGLE_OPERATIONS_RESEARCH_API_KEY;
  if (!apiKey) {
    throw new Error('API key is not set in the environment variables');
  }

  const url = new URL(
    'https://optimization.googleapis.com/v1/scheduling:solveShiftScheduling',
  );
  url.searchParams.append('key', apiKey);

  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiPayload),
  });

  if (!apiResponse.ok) {
    throw new Error(`API responded with status: ${apiResponse.status}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const apiResponseData = await apiResponse.json();

  return json(apiResponseData);
};
