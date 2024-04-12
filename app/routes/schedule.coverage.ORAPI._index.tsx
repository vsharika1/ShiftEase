import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { NavLink, useLoaderData, useRouteLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';

import type { loader as parentLoader } from './schedule.shift';

interface DBUser {
  id: string;
  role: string;
  phoneNumber: string;
}

interface LoaderData {
  dbUser: DBUser;
}

export async function loader({ request }: LoaderFunctionArgs) {
  /**
   * Must guard child route even if parent route is already guarded
   * as Remix calls all loaders in parallel.
   */
  const [, dbUser] = await requireAuthedUser(request);
  return json({ dbUser });
}

export default function ScheduleShiftView() {
  const data = useRouteLoaderData<typeof parentLoader>(
    'routes/schedule.coverage.ORAPI',
  );

  const { dbUser } = useLoaderData<LoaderData>();
  const userHasAccess =
    dbUser.role === 'Manager' || dbUser.role === 'Administrator';

  if (!data) throw new Error('Parent data not loaded');

  return (
    <>
      <div className="flex justify-center space-x-4">
        <NavLink
          to="/dashboard"
          className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
        >
          Home
        </NavLink>

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

        <NavLink
          to="/logout"
          className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
        >
          Sign out
        </NavLink>
      </div>
      {userHasAccess ? (
        <>
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Shifts
          </h1>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              RAW API RESPONSE
            </h4>
            <p className="font-mono bg-white p-4 rounded shadow">
              {JSON.stringify(data, null, 2)}
            </p>
          </div>
        </>
      ) : (
        <div className="mt-10 p-6 max-w-lg mx-auto bg-red-100 border-l-4 border-red-500 text-red-700">
          <h3 className="text-lg font-medium mt-0">Access Denied</h3>
          <div className="mt-2">
            You don&apos;t have access to this resource. Please contact the
            administrator for more information.
          </div>
        </div>
      )}
    </>
  );
}
