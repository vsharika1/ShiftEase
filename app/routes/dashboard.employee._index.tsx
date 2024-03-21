import type { LoaderFunctionArgs } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';

import type { loader as parentLoader } from './dashboard.employee';

export async function loader({ request }: LoaderFunctionArgs) {
  /**
   * Must guard child route even if parent route is already guarded
   * as Remix calls all loaders in parallel.
   */
  await requireAuthedUser(request);
  return null;
}

export default function AvailabilityView() {
  const users = useRouteLoaderData<typeof parentLoader>(
    'routes/dashboard.employee',
  );

  if (!users) throw new Error('Parent data not loaded');

  return (
    <>
      <h1>My Availability</h1>
      <ul className="bg-slate-300 p-4">
        {users.map((u) => (
          <li key={u.id}>{u.role}</li>
        ))}
      </ul>
      {/* <Link to="/dashboard/employee/edit">Edit availability</Link> */}
    </>
  );
}
