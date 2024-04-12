import type { LoaderFunctionArgs } from '@remix-run/node';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import type { ORApiResponse } from '~/types/ORAPI';

async function fetchDataFromDatabase() {
  const users = await prisma.user.findMany({
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

  const shifts = await prisma.shift.findMany({
    include: {
      coverageRequirement: {
        include: {
          roleRequirement: true,
        },
      },
    },
  });

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

  const covReqs = shifts
    .filter((shift) => shift.coverageRequirement)
    .map(({ id, coverageRequirement }) => [id, coverageRequirement!] as const);

  const userRoles = users.map((user) => user.role);

  const shiftRequirementRoles = covReqs
    .map(([, covReq]) => covReq)
    .flatMap((covReq) => covReq.roleRequirement.map((req) => req.roleName));

  const allRoleIds = Array.from(
    new Set([...userRoles, ...shiftRequirementRoles]),
  );

  const apiPayload = {
    requestId: 'best_request_id',
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
    coverageRequirements: covReqs.map(([shiftId, covReq]) => {
      const roleRequirements = covReq.roleRequirement.map((role) => {
        const { roleName, roleTargetEmployeeCount, rolePriority } = role;
        return {
          role_id: roleName,
          target_employee_count: roleTargetEmployeeCount,
          priority: rolePriority,
        };
      });
      return {
        shiftIds: [shiftId],
        roleRequirements,
      };
    }),
    role_ids: allRoleIds,
  };

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
    throw new Error(`API errored with status: ${apiResponse.status}`);
  }

  const apiResponseData = (await apiResponse.json()) as ORApiResponse;

  return prisma.$transaction(
    apiResponseData.shiftAssignments.map(
      ({ employeeId: userId, shiftId, roleId }) =>
        prisma.shiftAssignment.upsert({
          where: { id: { shiftId, userId } },
          update: { roleId },
          create: { userId, shiftId, roleId },
        }),
    ),
  );
};
