import { json, type LoaderFunctionArgs } from '@remix-run/node';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import type { ShiftWithCoverageResponse } from '~/types/form/ScheduleShiftSubmission';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await requireAuthedUser(request);

  const shifts = await prisma.shift.findMany({
    select: {
      id: true,
      start: true,
      end: true,
      coverageRequirementId: true,
    },
  });

  const requirements = await prisma.coverageRequirement.findMany({
    select: {
      name: true,
    },
  });

  const shiftsWithRequirement = {
    shifts,
    requirements,
  };

  return json(shiftsWithRequirement) satisfies ShiftWithCoverageResponse;
};
