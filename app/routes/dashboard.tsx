import type { LoaderFunctionArgs } from '@remix-run/node';
import { NavLink, Outlet, useLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const result = await requireAuthedUser(request);

  return result;
};

export default function Dashboard() {
  const [authUser, dbUser] = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Sample Authentication Protected Route</h1>
      <h4>If you see this you&apos;ve logged in! I hope...</h4>
      <NavLink to="/logout" className="font-bold uppercase">
        Sign out
      </NavLink>
      <h4>RAW AUTH DATA</h4>
      <p className="font-mono bg-slate-300 p-4">{JSON.stringify(authUser)}</p>
      <h4>RAW DB DATA</h4>
      <p className="font-mono bg-slate-300 p-4">{JSON.stringify(dbUser)}</p>

      <Outlet />
    </>
  );
}
