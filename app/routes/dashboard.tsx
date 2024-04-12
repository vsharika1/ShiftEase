import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { NavLink, Outlet, useLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import DaySchedule from '~/components/DaySchedule';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [authUser, dbUser] = await requireAuthedUser(request);

  // Use dbUser.id to query for the user's shifts
  const currentDate = new Date();
  const nextAssignment = await prisma.shiftAssignment.findFirst({
    where: {
      userId: dbUser.id,
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
    authUser,
    dbUser,
    nextShift: nextAssignment?.shift,
  });
};

export default function Dashboard() {
  const { authUser, dbUser, nextShift } = useLoaderData<typeof loader>();

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl">
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/dashboard/availability"
            className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
          >
            My Availability
          </NavLink>

          {['Manager', 'Administrator'].includes(dbUser.role) && (
            <>
              <NavLink
                to="/employee-list"
                className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
              >
                View Employee List
              </NavLink>
              <NavLink
                to="/schedule/shift"
                className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
              >
                Manage Shifts
              </NavLink>
              <NavLink
                to="/addEmployee"
                className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
              >
                Add User
              </NavLink>
            </>
          )}
        </div>{' '}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome {authUser.displayName}
        </h1>
        <div className="flex justify-center space-x-4 mt-4">
          <NavLink
            to="/logout"
            className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Sign out
          </NavLink>
        </div>
        {nextShift ? (
          <DaySchedule {...nextShift} />
        ) : (
          <p className="text-lg text-center text-gray-600 mt-10">
            No Upcoming Shifts Available
          </p>
        )}
        <Outlet />
      </div>
    </div>
  );
}
