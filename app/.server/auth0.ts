import { ManagementClient } from 'auth0';

if (!process.env.AUTH0_ORIGIN || !process.env.AUTH0_MGMT_TOKEN) {
  throw new Error(
    'Missing required environment variables for Auth0 management API.',
  );
}

export const mgmtClient = new ManagementClient({
  domain: process.env.AUTH0_ORIGIN,
  token: process.env.AUTH0_MGMT_TOKEN,
});
