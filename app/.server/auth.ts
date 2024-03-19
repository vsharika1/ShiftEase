import { createCookieSessionStorage, redirect } from '@remix-run/node';

import { Authenticator } from 'remix-auth';
import { Auth0Strategy, type Auth0Profile } from 'remix-auth-auth0';

// TODO: set using env
const APP_NAME = 'CMPT372-Project';
const OAUTH_CLIENTID = '6DF1LPKvK4aHzt0qzEBmQ7PmOXLryy0Q';
const LOGOUT_REDIRECT_PATHNAME = '/signed-out';
const AUTH0_URL = new URL('https://dev-clqbtth7sknk4r0a.us.auth0.com/');
const CALLBACK_REDIRECT_KEY = 'redirect-to';

/**
 * CRITICAL WARNING!!!!!!!!!!!!
 * CRITICAL WARNING!!!!!!!!!!!!
 * CRITICAL WARNING!!!!!!!!!!!!
 * CRITICAL WARNING!!!!!!!!!!!!
 * CRITICAL WARNING!!!!!!!!!!!!
 * CRITICAL WARNING!!!!!!!!!!!!
 * TODO: CHANGE THIS CLIENT SECRET BEFORE DEPLOYING TO PRODUCTION AND DON'T PUSH THE NEW SECRET TO GITHUB
 */
const AUTH0_CLIENT_SECRET =
  'syBl9I6YxvJ6UUqcGneC7yZ9KDTEgjoxUAd-JhJXVBx5_lrTJPhcKy90blk7qWAt';

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: 'http://localhost:5173/auth0/callback',
    clientID: OAUTH_CLIENTID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_URL.host,
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  async ({ profile }) => profile,
);

const sessionStorage = createCookieSessionStorage({
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
  cookie: {
    name: `${APP_NAME}::auth`,
    sameSite: 'lax', // this helps with CSRF
    path: '/', // add this so the cookie will work in all routes
    httpOnly: true,
    // FIXME: set this properly in a real app
    // https://remix.run/docs/en/main/utils/cookies#signing-cookies
    secrets: ['ersg6n9bsv8e7456ybvm98o9bze8r7hmyo9esz5'],
    secure: false, // FIXME: set this properly in a real app
  },
});

const { getSession, commitSession, destroySession } = sessionStorage;

const authenticator = new Authenticator<Auth0Profile>(sessionStorage);
authenticator.use(auth0Strategy);

export async function logout(req: Request) {
  const session = await getSession(req.headers.get('cookie'));

  const logoutURL = new URL('/v2/logout', AUTH0_URL);
  logoutURL.searchParams.set('client_id', OAUTH_CLIENTID);
  logoutURL.searchParams.set(
    'returnTo',
    new URL(LOGOUT_REDIRECT_PATHNAME, req.url).href,
  );

  return redirect(logoutURL.href, {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
}

declare module '@remix-run/node' {
  interface SessionData {
    [CALLBACK_REDIRECT_KEY]?: string;
  }
}

export const authenticate = (req: Request) =>
  authenticator.authenticate('auth0', req, {
    failureRedirect: '/signed-out',
  });

export async function requireAuth(req: Request): Promise<Auth0Profile> {
  const user = await authenticator.isAuthenticated(req);
  if (user) return user;

  // Not authenticated at this point.

  const session = await getSession(req.headers.get('cookie'));
  session.flash(CALLBACK_REDIRECT_KEY, req.url);
  const headers = new Headers({ 'Set-Cookie': await commitSession(session) });

  /**
   * We need to redirect to another page which calls `authenticate` for us because
   * `authenticator.authenticate` doesn't allow us to set the header.
   */
  throw redirect('/authenticate', { headers });
}

export async function handleAuthCallback(req: Request) {
  const authSessionData = await authenticate(req);

  const session = await getSession(req.headers.get('cookie'));
  session.set(authenticator.sessionKey, authSessionData);

  const redirectUrl = session.get(CALLBACK_REDIRECT_KEY);
  const headers = new Headers({ 'Set-Cookie': await commitSession(session) });

  if (redirectUrl) return redirect(redirectUrl, { headers });

  return null;
}
