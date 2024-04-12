import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Link,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
} from '@remix-run/react';

import { DateTime, Interval } from 'ts-luxon';

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

const LUXON_BASE_OPTS = { setZone: true } as const;

export default function ScheduleShiftView() {
  const data = useRouteLoaderData<typeof parentLoader>('routes/schedule.shift');
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
        <div className="max-w-6xl flex justify-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Shifts
            </h1>
            <div className="flex space-x-4  m-4">
              <NavLink
                to="/schedule/coverage"
                className="inline-block bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Manage Shift Requirements
              </NavLink>
              <NavLink
                to="/schedule/coverage/ORAPI"
                className="inline-block bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Generate Schedule
              </NavLink>
            </div>
            <ul className="bg-slate-100 rounded-lg p-4 shadow-lg divide-y divide-slate-200">
              {data.shifts.map((s) => {
                const startDate = DateTime.fromISO(s.start, LUXON_BASE_OPTS);
                const endDate = DateTime.fromISO(s.end, LUXON_BASE_OPTS);
                const duration = Interval.fromDateTimes(startDate, endDate)
                  .toDuration()
                  .shiftTo('hours', 'minutes');
                return (
                  <li key={s.id}>
                    {startDate.toLocaleString(
                      DateTime.DATETIME_MED_WITH_WEEKDAY,
                    )}{' '}
                    for {duration.toHuman()} {'{'}
                    {s.coverageRequirementId}
                    {'}'}
                  </li>
                );
              })}
            </ul>
            <Link to="/schedule/shift/edit">Edit Shift</Link>
          </div>
        </div>
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
