import { z } from 'zod';

interface ShiftAssignments {
  employeeId: string;
  shiftId: string;
  roleId: string;
}

interface ShiftInput {
  solutionStatus: string;
  shiftAssignments: ShiftAssignments[];
}

export const OrApiResponseSchema = z.object({
  solutionStatus: z.string(),
  shiftAssignments: z.array(
    z.object({
      employeeId: z.string(),
      shiftId: z.string(),
      roleId: z.string(),
    }),
  ),
}) satisfies z.Schema<ShiftInput>;
