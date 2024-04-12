import type { LoaderFunctionArgs } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';
import { requireRole } from '~/.server/authn';
import NavBar from '~/components/NavBar';

import type { loader as parentLoader } from './schedule.shift';

export async function loader({ request }: LoaderFunctionArgs) {
  const userInfo = await requireAuthedUser(request);
  requireRole(userInfo, ['Manager', 'Administrator']);
  return null;
}

export default function ScheduleShiftView() {
  const data = useRouteLoaderData<typeof parentLoader>(
    'routes/schedule.coverage.ORAPI',
  );

  if (!data) throw new Error('Parent data not loaded');

  return (
    <>
      <NavBar showEmployeeManagement={true} />
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
  );
}
