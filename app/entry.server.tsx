import { randomBytes } from 'node:crypto';
import { PassThrough } from 'node:stream';

import { renderToPipeableStream } from 'react-dom/server';

import type {
  ActionFunctionArgs,
  HandleDataRequestFunction,
  HandleDocumentRequestFunction,
  HandleErrorFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer, isRouteErrorResponse } from '@remix-run/react';

import builder from 'content-security-policy-builder';
import { isbot } from 'isbot';

import { prisma } from '~/.server/db';

import { NonceProvider } from './nonce-provider';

const ABORT_DELAY = 5000; // milliseconds

await prisma.$connect();

const handleError: HandleErrorFunction = (
  error: unknown,
  { request }: LoaderFunctionArgs | ActionFunctionArgs,
) => {
  if (request.signal.aborted) return;
  if (isRouteErrorResponse(error) && error.status.toString().startsWith('4'))
    return;
  console.error(error);
};

const handleDataRequest: HandleDataRequestFunction = (response) => {
  setSecurityHeaders(response.headers, 'data');
  return response;
};

const handleRequest: HandleDocumentRequestFunction = (
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) => {
  const isBot = isbot(request.headers.get('user-agent'));
  const cspNonce = randomBytes(16).toString('base64');

  setSecurityHeaders(
    responseHeaders,
    'document',
    cspNonce,
    new URL(request.url),
  );

  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <NonceProvider value={cspNonce}>
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </NonceProvider>,
      {
        nonce: cspNonce,
        onShellReady() {
          shellRendered = true;
          if (!isBot) handleReady();
        },
        onAllReady() {
          if (isBot) handleReady();
        },
        onShellError(error: unknown) {
          // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );

    function handleReady() {
      const body = new PassThrough();
      const stream = createReadableStreamFromReadable(body);

      responseHeaders.set('Content-Type', 'text/html');

      resolve(
        new Response(stream, {
          headers: responseHeaders,
          status: responseStatusCode,
        }),
      );
      pipe(body);
    }

    setTimeout(abort, ABORT_DELAY);
  });
};

function setSecurityHeaders(
  resHeaders: Headers,
  ...args: ['data'] | ['document', string, URL]
) {
  const [requestType, cspNonce, reqUrl] = args;

  const inViteDevMode = import.meta.env.MODE === 'development';

  resHeaders.set('X-Content-Type-Options', 'nosniff');
  resHeaders.set('X-Permitted-Cross-Domain-Policies', 'none');
  resHeaders.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains',
  );

  if (requestType !== 'document') return;

  resHeaders.set('Cross-Origin-Resource-Policy', 'same-origin');
  resHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
  resHeaders.set('Origin-Agent-Cluster', '?1');
  resHeaders.set('Referrer-Policy', 'same-origin');
  resHeaders.set('X-Download-Options', 'noopen');
  resHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  resHeaders.set('X-XSS-Protection', '0');

  resHeaders.set(
    'Content-Security-Policy-Report-Only',
    builder({
      directives: {
        defaultSrc: "'self'",
        baseUri: "'self'",
        blockAllMixedContent: true,
        fontSrc: ["'self'", 'https:', 'data:'],
        frameAncestors: "'none'",
        imgSrc: ["'self'", 'data:'],
        objectSrc: "'none'",
        frameSrc: "'none'",
        childSrc: "'self'",
        scriptSrcAttr: "'none'",
        styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
        upgradeInsecureRequests: true,
        formAction: "'self'",
        scriptSrc: ["'strict-dynamic'", `'nonce-${cspNonce}'`],
        // @ts-expect-error: TS is stupid
        connectSrc: ["'self'", inViteDevMode && `ws://${reqUrl.host}`].filter(
          Boolean,
        ),
      },
    }),
  );
}

export { handleRequest as default, handleDataRequest, handleError };
