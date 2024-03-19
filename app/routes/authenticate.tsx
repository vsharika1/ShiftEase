import type { LoaderFunctionArgs } from '@remix-run/node';

import { authenticate } from '~/.server/auth';

export const loader = async ({ request }: LoaderFunctionArgs) =>
  authenticate(request);
