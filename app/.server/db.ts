import { PrismaClient } from '@prisma/client';

let datasourceUrl: string | undefined;

if (process.env.INSTANCE_UNIX_SOCKET) {
  if (!process.env.DB_PASS) throw new Error('DB_PASS is required');
  const source = new URL('postgresql://localhost/postgres');
  source.username = 'postgres';
  source.password = process.env.DB_PASS;
  source.searchParams.set('host', process.env.INSTANCE_UNIX_SOCKET);

  datasourceUrl = source.href;
}

export const prisma = new PrismaClient({ datasourceUrl });
