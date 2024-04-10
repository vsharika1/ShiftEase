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

  return json({ authUser, dbUser, nextShift: nextAssignment?.shift });
};

export default function Dashboard() {
  const { authUser, dbUser, nextShift } = useLoaderData<typeof loader>();

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Sample Authentication Protected Route
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          If you see this, you&apos;ve logged in! I hope...
        </p>
        <div>
          <NavLink
            to="/logout"
            className="inline-block bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign out
          </NavLink>
        </div>
        <div className="mt-4">
          <NavLink
            to="/addEmployee"
            className="inline-block bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Add User
          </NavLink>
        </div>

        <div className="mt-4">
          <NavLink
            to="/employee-list"
            className="inline-block bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Employee List
          </NavLink>
        </div>

        {nextShift ? (
          <DaySchedule {...nextShift} />
        ) : (
          <p className="text-lg text-center text-gray-600 mt-10">
            No Upcoming Shifts Available
          </p>
        )}

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">
            RAW AUTH DATA
          </h4>
          <p className="font-mono bg-white p-4 rounded shadow">
            {JSON.stringify(authUser, null, 2)}
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">
            RAW DB DATA
          </h4>
          <p className="font-mono bg-white p-4 rounded shadow">
            {JSON.stringify(dbUser, null, 2)}
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
