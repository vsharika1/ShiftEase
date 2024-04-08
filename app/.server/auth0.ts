import { ManagementClient } from 'auth0';

if (
  !process.env.AUTH0_DOMAIN ||
  !process.env.AUTH0_MGMT_CLIENT_ID ||
  !process.env.AUTH0_MGMT_CLIENT_SECRET
) {
  throw new Error(
    'Missing required environment variables for Auth0 management API.',
  );
}

export const mgmtClient = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_MGMT_CLIENT_ID,
  clientSecret: process.env.AUTH0_MGMT_CLIENT_SECRET,
});
