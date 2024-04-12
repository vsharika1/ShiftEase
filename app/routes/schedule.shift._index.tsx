import type { LoaderFunctionArgs } from '@remix-run/node';
import { Link, NavLink, useRouteLoaderData } from '@remix-run/react';

import { DateTime, Interval } from 'ts-luxon';

import { requireAuthedUser } from '~/.server/auth';
import { requireRole } from '~/.server/authn';
import NavBar from '~/components/NavBar';

import type { loader as parentLoader } from './schedule.shift';

export async function loader({ request }: LoaderFunctionArgs) {
  const userInfo = await requireAuthedUser(request);
  requireRole(userInfo, ['Manager', 'Administrator']);
  return null;
}

const LUXON_BASE_OPTS = { setZone: true } as const;

export default function ScheduleShiftView() {
  const data = useRouteLoaderData<typeof parentLoader>('routes/schedule.shift');

  if (!data) throw new Error('Parent data not loaded');

  return (
    <>
      <NavBar showEmployeeManagement={true} />
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Shifts
          </h1>
          <div className="flex justify-center space-x-2 mb-6">
            <NavLink
              to="/schedule/coverage"
              className="bg-blue-500 text-white font-bold uppercase text-xs px-4 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Manage Shift Coverage Requirements
            </NavLink>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <ul className="bg-white p-6 divide-y divide-gray-200">
              {data.shifts.map((s) => {
                const startDate = DateTime.fromISO(s.start, LUXON_BASE_OPTS);
                const endDate = DateTime.fromISO(s.end, LUXON_BASE_OPTS);
                const duration = Interval.fromDateTimes(startDate, endDate)
                  .toDuration()
                  .shiftTo('hours', 'minutes');
                return (
                  <li key={s.id} className="py-4 first:pt-0 last:pb-0">
                    <span className="font-medium text-gray-800">
                      {startDate.toLocaleString(
                        DateTime.DATETIME_MED_WITH_WEEKDAY,
                      )}
                    </span>{' '}
                    for{' '}
                    <span className="text-gray-600">{duration.toHuman()}</span>{' '}
                    {'{'}
                    <span className="text-blue-500">
                      {s.coverageRequirementId}
                    </span>
                    {'}'}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 text-center">
              <Link
                to="/schedule/shift/edit"
                className="inline-block bg-blue-500 text-white font-bold uppercase text-xs px-4 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Edit Shift
              </Link>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            <NavLink
              to="/schedule/coverage/ORAPI"
              className="bg-blue-500 text-white font-bold uppercase text-xs px-4 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Generate Schedule
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
