import type { TypedResponse } from '@remix-run/node';
import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Prisma } from '@prisma/client';
import type { UserCreate } from 'auth0';
import type { Any } from 'ts-toolbelt';
import { z } from 'zod';

import type { prisma } from '~/.server/db';

type DBUserCreate = Pick<Prisma.UserCreateInput, 'role' | 'phoneNumber'>;

export const UserSubmission = z.object({
  email: z.string().email('Please provide a valid email.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/u, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/u, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/u, 'Password must contain at least one number')
    .regex(
      /[@$!%*?&]/u,
      'Password must contain at least one special character like @$!%*?&',
    ),
  role: z
    .enum(['Manager', 'Associate'])
    .refine((role) => ['Manager', 'Associate'].includes(role), {
      message: "Role must be either 'Manager' or 'Associate'.",
    }),
  given_name: z.string().min(1, 'Given name is required.'),
  family_name: z.string().min(1, 'Family name is required.'),
  phoneNumber: z.string(),
}) satisfies z.Schema<Omit<UserCreate, 'connection'> & DBUserCreate>;

export type UserFormData = z.infer<typeof UserSubmission>;

export const userFormResolver = zodResolver(UserSubmission);

type UserCreateResult = Prisma.Result<
  typeof prisma.user,
  { data: Prisma.UserCreateInput },
  'create'
>;

export type UserResponse = TypedResponse<UserCreateResult>;

export type UserPayload = Any.Compute<Jsonify<UserCreateResult>>;
