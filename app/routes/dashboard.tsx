import type { LoaderFunctionArgs } from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';

import { requireAuth } from '~/.server/auth';
import { prisma } from '~/.server/db';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireAuth(request);

  const dbUser = prisma.user.findUnique({ where: { id: user.id } });

  return [user, dbUser] as const;
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
      <p className="font-mono">{JSON.stringify(authUser)}</p>
      <h4>RAW DB DATA</h4>
      <p className="font-mono">{JSON.stringify(dbUser)}</p>
    </>
  );
}
