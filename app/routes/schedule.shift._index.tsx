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
import { hasRole } from '~/.server/authn';
import NavBar from '~/components/NavBar';

import type { loader as parentLoader } from './schedule.shift';

export async function loader({ request }: LoaderFunctionArgs) {
  const userInfo = await requireAuthedUser(request);
  return json({ userInfo });
}

const LUXON_BASE_OPTS = { setZone: true } as const;

export default function ScheduleShiftView() {
  const data = useRouteLoaderData<typeof parentLoader>('routes/schedule.shift');
  const { userInfo } = useLoaderData<typeof loader>();

  if (!data) throw new Error('Parent data not loaded');

  return (
    <>
      <NavBar
        showEmployeeManagement={hasRole(userInfo, ['Manager', 'Administrator'])}
      />
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
                  {startDate.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}{' '}
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
    </>
  );
}
