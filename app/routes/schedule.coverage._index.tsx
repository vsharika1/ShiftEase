import type { LoaderFunctionArgs } from '@remix-run/node';
import { NavLink, useRouteLoaderData } from '@remix-run/react';

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Coverage Requirements
      </h1>
      <ul className="bg-slate-200 divide-y divide-slate-400 rounded-lg shadow-lg overflow-hidden">
        {coverageRequirements.map((cr) => (
          <li key={cr.name} className="p-4 hover:bg-slate-300">
            <strong className="text-lg font-semibold">{cr.name}</strong>
            <ul className="mt-2 space-y-2 pl-4">
              {cr.roleRequirement.map((rr, index) => (
                <li key={index} className="list-disc">
                  <span className="font-medium">Role Name:</span> {rr.roleName},
                  <span className="font-medium"> Target Count:</span>{' '}
                  {rr.roleTargetEmployeeCount},
                  <span className="font-medium"> Priority:</span>{' '}
                  {rr.rolePriority}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <NavLink
          to="/schedule/shift"
          className="bg-blue-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Back
        </NavLink>
        <NavLink
          to="/schedule/coverage/edit"
          className="bg-teal-500 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-teal-600 transition duration-300"
        >
          Edit Coverage Requirement
        </NavLink>
      </div>
    </div>
  );
}
