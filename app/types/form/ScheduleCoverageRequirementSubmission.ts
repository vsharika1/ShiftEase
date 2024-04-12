import type { TypedResponse } from '@remix-run/node';
import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Prisma } from '@prisma/client';
import type { Any } from 'ts-toolbelt';
import { z } from 'zod';

import type { prisma } from '~/.server/db';

export interface ShiftDateTime {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes?: number;
}

export enum Role {
  Associate = 'Associate',
  Manager = 'Manager',
}

export interface ScheduleCoverageRequirement
  extends Prisma.CoverageRequirementCreateWithoutRoleRequirementInput {
  roleRequirements: Prisma.RoleRequirementCreateWithoutCoverageRequirementInput[];
}

export interface ScheduleCoverageRequirementsInput {
  coverageRequirements: ScheduleCoverageRequirement[];
}

export const CoverageRequirementSubmission = z.object({
  coverageRequirements: z.array(
    z.object({
      name: z.string(),
      roleRequirements: z.array(
        z.object({
          role: z.nativeEnum(Role),
          targetEmployeeCount: z.number(),
          priority: z.string(),
        }),
      ),
    }),
  ),
}) satisfies z.Schema<ScheduleCoverageRequirementsInput>;

export type ScheduleCoverageRequirementsFormData = z.infer<
  typeof CoverageRequirementSubmission
>;

export const scheduleCoverageRequirementsFormResolver = zodResolver(
  CoverageRequirementSubmission,
);
type CoverageRequirementFindManyResult = Prisma.Result<
  typeof prisma.coverageRequirement,
  {
    include: {
      roleRequirement: true;
    };
  },
  'findMany'
>;

export type CoverageRequirementResponse =
  TypedResponse<CoverageRequirementFindManyResult>;

export type CoverageRequirementPayload = Any.Compute<
  Jsonify<CoverageRequirementFindManyResult>
>;
