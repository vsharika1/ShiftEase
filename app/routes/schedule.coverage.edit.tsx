import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLocation, useRouteLoaderData } from '@remix-run/react';

import type { Prisma } from '@prisma/client';
import { getValidatedFormData } from 'remix-hook-form';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import ScheduleCoverageForm from '~/components/Forms/ScheduleCoverageForm';
import {
  scheduleCoverageRequirementsFormResolver,
  type ScheduleCoverageRequirementsFormData,
} from '~/types/form/ScheduleCoverageRequirementSubmission';

import type { loader as parentLoader } from './schedule.coverage';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuthedUser(request);
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuthedUser(request);
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<ScheduleCoverageRequirementsFormData>(
    request,
    scheduleCoverageRequirementsFormResolver,
  );

  if (errors) return json({ errors, defaultValues });

  const toUpsert: Prisma.Args<typeof prisma.coverageRequirement, 'upsert'>[] =
    [];

  function genCoC(
    covName: string,
    roleRequirements: ScheduleCoverageRequirementsFormData['coverageRequirements'][number]['roleRequirements'],
  ): Prisma.RoleOnCoverageCreateOrConnectWithoutCoverageInput[] {
    return roleRequirements.map((rr) => ({
      where: {
        roleName_roleTargetEmployeeCount_rolePriority_coverageName: {
          roleName: rr.role,
          roleTargetEmployeeCount: rr.targetEmployeeCount,
          rolePriority: rr.priority,
          coverageName: covName,
        },
      },
      create: {
        roleReq: {
          connectOrCreate: {
            where: {
              role_targetEmployeeCount_priority: {
                role: rr.role,
                targetEmployeeCount: rr.targetEmployeeCount,
                priority: rr.priority,
              },
            },
            create: {
              role: rr.role,
              targetEmployeeCount: rr.targetEmployeeCount,
              priority: rr.priority,
            },
          },
        },
      },
    }));
  }

  for (const { name, roleRequirements } of data.coverageRequirements) {
    toUpsert.push({
      where: { name },
      create: {
        name,
        roleRequirement: {
          connectOrCreate: genCoC(name, roleRequirements),
        },
      },
      update: {
        roleRequirement: {
          connectOrCreate: genCoC(name, roleRequirements),
        },
      },
    });
  }

  await prisma.$transaction([
    prisma.coverageRequirement.deleteMany(),
    ...toUpsert.map((arg) => prisma.coverageRequirement.upsert(arg)),
  ]);

  return redirect('/schedule/coverage');
}

export default function CoverageEdit() {
  const { pathname } = useLocation();
  const coverages = useRouteLoaderData<typeof parentLoader>(
    'routes/schedule.coverage',
  );

  if (!coverages) throw new Error('Parent data not loaded');

  return <ScheduleCoverageForm formAction={pathname} coverage={coverages} />;
}
