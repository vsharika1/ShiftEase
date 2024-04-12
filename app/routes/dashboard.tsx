import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';
import { hasRole } from '~/.server/authn';
import { prisma } from '~/.server/db';
import DaySchedule from '~/components/DaySchedule';
import NavBar from '~/components/NavBar';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userInfo = await requireAuthedUser(request);

  // Use dbUser.id to query for the user's shifts
  const currentDate = new Date();
  const nextAssignment = await prisma.shiftAssignment.findFirst({
    where: {
      userId: userInfo[1].id,
      shift: {
        start: {
          gt: currentDate,
        },
      },
    },
    include: {
      shift: true,
    },
    orderBy: {
      shift: {
        start: 'asc',
      },
    },
  });

  return json({
    showManagementNav: hasRole(userInfo, ['Manager', 'Administrator']),
    displayName: userInfo[0].displayName,
    nextShift: nextAssignment?.shift,
  });
};

export default function Dashboard() {
  const { showManagementNav, displayName, nextShift } =
    useLoaderData<typeof loader>();

  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8">
      <NavBar showEmployeeManagement={showManagementNav} />

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Welcome {displayName}
      </h1>
      {nextShift ? (
        <DaySchedule {...nextShift} />
      ) : (
        <p className="text-lg text-center text-gray-600 mt-10">
          No Upcoming Shifts Available
        </p>
      )}
      <Outlet />
    </div>
  );
}
