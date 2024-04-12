import { json, type LoaderFunctionArgs } from '@remix-run/node';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import type { AvailabilityResponse } from '~/types/form/AvailabilitySubmission';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [, dbUser] = await requireAuthedUser(request);

  const availability = await prisma.availability.findMany({
    where: {
      userId: dbUser.id,
    },
  });

  return json(availability) satisfies AvailabilityResponse;
};
