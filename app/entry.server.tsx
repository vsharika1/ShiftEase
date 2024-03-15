import { PassThrough } from 'node:stream';

import { renderToPipeableStream } from 'react-dom/server';

import type {
  ActionFunctionArgs,
  HandleDocumentRequestFunction,
  HandleErrorFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer, isRouteErrorResponse } from '@remix-run/react';

import { isbot } from 'isbot';

import { NonceProvider } from './nonce-provider';

const ABORT_DELAY = 5000; // milliseconds

const handleError: HandleErrorFunction = (
  error: unknown,
  { request }: LoaderFunctionArgs | ActionFunctionArgs,
) => {
  if (request.signal.aborted) return;
  if (isRouteErrorResponse(error) && error.status.toString().startsWith('4'))
    return;
  console.error(error);
};

const handleRequest: HandleDocumentRequestFunction = (
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  loadContext,
) => {
  const isBot = isbot(request.headers.get('user-agent'));
  const cspNonce = loadContext.cspNonce;

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

export { handleRequest as default, handleError };
