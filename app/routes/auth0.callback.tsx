import type { LoaderFunctionArgs } from '@remix-run/node';

import { handleAuthCallback } from '~/.server/auth';

export const loader = async ({ request }: LoaderFunctionArgs) =>
  handleAuthCallback(request);

export default function AuthenticatedRedirect() {
  return (
    <>
      <h1>Oh snap!</h1>
      <h2>Missing Redirect URL</h2>
      <p>
        You came here because you tried to access a page that requires
        authentication, but we don&apos;t know which page you&apos;ve tried to
        visit.
      </p>
    </>
  );
}
