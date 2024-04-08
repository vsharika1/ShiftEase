import type { TypedResponse } from '@remix-run/node';
import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Prisma } from '@prisma/client';
import type { Any } from 'ts-toolbelt';
import { z } from 'zod';

import type { prisma } from '~/.server/db';

interface UserInput {
  id: string;
  password: string;
  role: string;
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
}

export const UserSubmission = z.object({
  id: z
    .string()
    .email({ message: 'Invalid email format' })
    .nonempty({ message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  role: z.string().min(1, { message: 'Role is required' }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  contactNumber: z.string().optional(),
}) satisfies z.Schema<UserInput>;

export type UserFormData = z.infer<typeof UserSubmission>;

export const userFormResolver = zodResolver(UserSubmission);

type UserCreateResult = Prisma.Result<
  typeof prisma.user,
  { data: Prisma.UserCreateInput },
  'create'
>;

export type UserResponse = TypedResponse<UserCreateResult>;

export type UserPayload = Any.Compute<Jsonify<UserCreateResult>>;
