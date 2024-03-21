import { json, type LoaderFunctionArgs } from '@remix-run/node';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [, dbUser] = await requireAuthedUser(request);

  const users = await prisma.user.findMany({
    where: {
      id: dbUser.id,
    },
  });

  return json(users);
};
