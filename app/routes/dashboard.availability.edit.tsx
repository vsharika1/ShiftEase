import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLocation, useRouteLoaderData } from '@remix-run/react';

import type { Prisma } from '@prisma/client';
import { getValidatedFormData } from 'remix-hook-form';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import AvailabilityForm from '~/components/Forms/AvailabilityForm';
import {
  availabilityFormResolver,
  type AvailabilityFormData,
} from '~/types/form/AvailabilitySubmission';

import type { loader as parentLoader } from './dashboard.availability';

export async function loader({ request }: LoaderFunctionArgs) {
  /**
   * Must guard child route even if parent route is already guarded
   * as Remix calls all loaders in parallel.
   * See: https://remix.run/docs/en/main/guides/faq#how-can-i-have-a-parent-route-loader-validate-the-user-and-protect-all-child-routes
   */
  await requireAuthedUser(request);
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const [user] = await requireAuthedUser(request);
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<AvailabilityFormData>(
    request,
    availabilityFormResolver,
  );

  if (errors) return json({ errors, defaultValues });

  const toCreate: Prisma.Args<typeof prisma.availability, 'create'>[] = [];
  const toUpdate: Prisma.Args<typeof prisma.availability, 'update'>[] = [];

  for (const { id, start, end } of data.availability)
    if (id) toUpdate.push({ where: { id }, data: { start, end } });
    else
      toCreate.push({
        data: { start, end, user: { connect: { id: user.id } } },
      });

  await prisma.$transaction([
    ...toUpdate.map((arg) => prisma.availability.update(arg)),
    ...toCreate.map((arg) => prisma.availability.create(arg)),
  ]);

  return redirect('/dashboard/availability');
}

export default function AvailabilityEdit() {
  const { pathname } = useLocation();
  const availability = useRouteLoaderData<typeof parentLoader>(
    'routes/dashboard.availability',
  );

  if (!availability) throw new Error('Parent data not loaded');

  return <AvailabilityForm formAction={pathname} availability={availability} />;
}
