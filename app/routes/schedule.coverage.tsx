import { json, type LoaderFunctionArgs } from '@remix-run/node';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import type { CoverageRequirementResponse } from '~/types/form/ScheduleCoverageRequirementSubmission';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuthedUser(request);
  const coverage = await prisma.coverageRequirement.findMany({
    include: {
      roleRequirement: true,
    },
  });

  return json(coverage) satisfies CoverageRequirementResponse;
}
