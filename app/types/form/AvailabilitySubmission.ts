import type { TypedResponse } from '@remix-run/node';
import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Prisma } from '@prisma/client';
import type { Any } from 'ts-toolbelt';
import { z } from 'zod';

import type { prisma } from '~/.server/db';

interface AvailabilityInput {
  availability: Omit<
    Prisma.AvailabilityUncheckedCreateWithoutUserInput,
    'createdAt' | 'updatedAt'
  >[];
}

export const AvailabilitySubmission = z.object({
  availability: z.array(
    z.object({
      id: z.string().optional(),
      start: z.string().datetime({ offset: true }),
      end: z.string().datetime({ offset: true }),
    }),
  ),
}) satisfies z.Schema<AvailabilityInput>;

export type AvailabilityFormData = z.infer<typeof AvailabilitySubmission>;

export const availabilityFormResolver = zodResolver(AvailabilitySubmission);

type AvailabilityFindManyResult = Prisma.Result<
  typeof prisma.availability,
  { where: { userId: string } },
  'findMany'
>;

export type AvailabilityResponse = TypedResponse<AvailabilityFindManyResult>;

export type AvailabilityPayload = Any.Compute<
  Jsonify<AvailabilityFindManyResult>
>;
