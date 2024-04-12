import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLocation, useRouteLoaderData } from '@remix-run/react';

import type { Prisma } from '@prisma/client';
import { getValidatedFormData } from 'remix-hook-form';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import ScheduleShiftForm from '~/components/Forms/ScheduleShiftForm';
import {
  shiftFormResolver,
  type ShiftFormData,
} from '~/types/form/ScheduleShiftSubmission';

import type { loader as parentLoader } from './schedule.shift';

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
  } = await getValidatedFormData<ShiftFormData>(request, shiftFormResolver);

  if (errors) return json({ errors, defaultValues });

  const toCreate: Prisma.Args<typeof prisma.shift, 'create'>[] = [];
  const toUpdate: Prisma.Args<typeof prisma.shift, 'update'>[] = [];

  for (const { id, start, end, coverageRequirementId } of data.shifts) {
    if (id) {
      const updateArgs = coverageRequirementId
        ? { where: { id }, data: { start, end, coverageRequirementId } }
        : { where: { id }, data: { start, end } };
      toUpdate.push(updateArgs);
    } else {
      const createArgs = coverageRequirementId
        ? {
            data: {
              start,
              end,
              coverageRequirement: { connect: { name: coverageRequirementId } },
              createdBy: { connect: { id: user.id } },
            },
          }
        : {
            data: { start, end, createdBy: { connect: { id: user.id } } },
          };
      toCreate.push(createArgs);
    }
  }
  await prisma.$transaction([
    ...toUpdate.map((arg) => prisma.shift.update(arg)),
    ...toCreate.map((arg) => prisma.shift.create(arg)),
  ]);

  return redirect('/schedule/shift');
}

export default function ShiftEdit() {
  const { pathname } = useLocation();
  const data = useRouteLoaderData<typeof parentLoader>('routes/schedule.shift');

  if (!data) throw new Error('Parent data not loaded');

  return (
    <ScheduleShiftForm
      formAction={pathname}
      shifts={data.shifts}
      requirements={data.requirements}
    />
  );
}
