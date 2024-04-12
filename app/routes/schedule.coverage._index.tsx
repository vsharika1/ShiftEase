import type { LoaderFunctionArgs } from '@remix-run/node';
import { Link, NavLink, useRouteLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';

import type { loader as parentLoader } from './schedule.coverage';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuthedUser(request);
  return null;
}

export default function CoverageRequirementView() {
  const coverageRequirements = useRouteLoaderData<typeof parentLoader>(
    'routes/schedule.coverage',
  );

  if (!coverageRequirements) throw new Error('Parent data not loaded');

  return (
    <>
      <h1>Coverage Requirements</h1>
      <ul className="bg-slate-300 p-4">
        {coverageRequirements.map((cr) => (
          <li key={cr.name}>
            <strong>{cr.name}</strong>
            <ul>
              {cr.roleRequirement.map((rr, index) => (
                <li key={index}>
                  Role Name: {rr.roleName}, Target Count:{' '}
                  {rr.roleTargetEmployeeCount}, Priority: {rr.rolePriority}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link to="/schedule/coverage/edit">Edit Coverage Requirement</Link>
      <div className="mt-4">
        <NavLink
          to="/schedule/shift"
          className="inline-block bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Manage Shifts
        </NavLink>
      </div>
    </>
  );
}
