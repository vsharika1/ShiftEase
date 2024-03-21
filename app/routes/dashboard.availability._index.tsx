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
      <h1>My Availability</h1>
      <ul className="bg-slate-300 p-4">
        {availabilities.map((a) => {
          const startDate = DateTime.fromISO(a.start, LUXON_BASE_OPTS);
          const endDate = DateTime.fromISO(a.end, LUXON_BASE_OPTS);
          const duration = Interval.fromDateTimes(startDate, endDate)
            .toDuration()
            .shiftTo('hours', 'minutes');
          return (
            <li key={a.id}>
              {startDate.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)} for{' '}
              {duration.toHuman()}
            </li>
          );
        })}
      </ul>
      <Link to="/dashboard/availability/edit">Edit availability</Link>
    </>
  );
}
