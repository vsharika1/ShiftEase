import type { TypedResponse } from '@remix-run/node';
import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Prisma } from '@prisma/client';
import type { UserCreate } from 'auth0';
import type { Any } from 'ts-toolbelt';
import { z } from 'zod';

import type { prisma } from '~/.server/db';

type DBUserCreate = Pick<Prisma.UserCreateInput, 'role'>;

export const UserSubmission = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.string().optional(), // TODO: change to enum with DB
  given_name: z.string().optional(),
  family_name: z.string().optional(),
  phone_number: z.string().optional(),
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
