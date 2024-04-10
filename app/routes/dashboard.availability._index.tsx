import type { LoaderFunctionArgs } from '@remix-run/node';
import { Link, useRouteLoaderData } from '@remix-run/react';

import { DateTime, Interval } from 'ts-luxon';

import { requireAuthedUser } from '~/.server/auth';

import type { loader as parentLoader } from './dashboard.availability';

export async function loader({ request }: LoaderFunctionArgs) {
  /**
   * Must guard child route even if parent route is already guarded
   * as Remix calls all loaders in parallel.
   */
  await requireAuthedUser(request);
  return null;
}

const LUXON_BASE_OPTS = { setZone: true } as const;

export default function AvailabilityView() {
  const availabilities = useRouteLoaderData<typeof parentLoader>(
    'routes/dashboard.availability',
  );

  if (!availabilities) throw new Error('Parent data not loaded');

  return (
    <>
      <h2 className="flex justify-center text-xl font-bold text-gray-800 my-5">
        My Availability
      </h2>
      <ul className="bg-slate-100 rounded-lg p-4 shadow-lg divide-y divide-slate-200">
        {availabilities.map((a) => {
          const startDate = DateTime.fromISO(a.start, LUXON_BASE_OPTS);
          const endDate = DateTime.fromISO(a.end, LUXON_BASE_OPTS);
          const duration = Interval.fromDateTimes(startDate, endDate)
            .toDuration()
            .shiftTo('hours', 'minutes');
          return (
            <li key={a.id} className="py-2">
              <span className="block text-sm font-medium text-gray-700">
                {startDate.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
              </span>
              <span className="block text-sm text-gray-500">
                Duration: {duration.toHuman()}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <Link
          className="inline-flex justify-center items-center mt-4 px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow hover:bg-blue-800 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          to="/dashboard/availability/edit"
        >
          Edit availability
        </Link>
      </div>
    </>
  );
}
