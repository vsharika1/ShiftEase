import type { TypedResponse } from '@remix-run/node';
import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Prisma } from '@prisma/client';
import type { Any } from 'ts-toolbelt';
import { z } from 'zod';

import type { prisma } from '~/.server/db';

interface ShiftInput {
  shifts: Omit<
    Prisma.ShiftUncheckedCreateWithoutCreatedByInput,
    'createdAt' | 'updatedAt'
  >[];
}

export const ShiftSubmission = z.object({
  shifts: z.array(
    z.object({
      id: z.string().optional(),
      start: z.string().datetime({ offset: true }),
      end: z.string().datetime({ offset: true }),
      coverageRequirementId: z.string().optional(),
    }),
  ),
}) satisfies z.Schema<ShiftInput>;

export type ShiftFormData = z.infer<typeof ShiftSubmission>;

export const shiftFormResolver = zodResolver(ShiftSubmission);

type ShiftFindManyResult = Prisma.Result<
  typeof prisma.shift,
  {
    select: {
      id: true;
      start: true;
      end: true;
      coverageRequirementId: true;
    };
  },
  'findMany'
>;

export type ShiftPayload = Any.Compute<Jsonify<ShiftFindManyResult>>;

type CoverageFindManyResult = Prisma.Result<
  typeof prisma.coverageRequirement,
  {
    select: {
      name: true;
    };
  },
  'findMany'
>;

export type RequirementPayload = Any.Compute<Jsonify<CoverageFindManyResult>>;

export interface ShiftWithCoverageFindMayResult {
  shifts: ShiftFindManyResult;
  requirements: CoverageFindManyResult;
}

export type ShiftWithCoverageResponse =
  TypedResponse<ShiftWithCoverageFindMayResult>;
