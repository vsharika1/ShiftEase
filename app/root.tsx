import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';

import './global.css';

import { motion } from 'framer-motion';

import { useNonce } from './nonce-provider';
import type { RemixRoute } from './types/RemixRoute';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap',
  },
];

export const meta: MetaFunction = () => [
  { title: 'ShiftEase' },
  { name: 'description', content: 'Best group project written for CMPT372!' },
];

export const Layout: RemixRoute['Layout'] = function Layout({ children }) {
  const nonce = useNonce();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <motion.div
          layoutRoot
          layoutScroll
          className="max-w-full w-[64rem] mx-auto font-sans h-[100vh] flex flex-col justify-center"
        >
          {children}
        </motion.div>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
};

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const isRenderError = !isRouteErrorResponse(error);

  // Log error to console if in browser
  if (typeof document !== 'undefined') console.error(error);

  return (
    <div className="flex items-center flex-col border-2 rounded-lg border-red-500 p-16">
      <h1 className="text-red-500 font-black">x_x</h1>
      <p className="uppercase font-bold">
        {!isRenderError && `${error.status.toString()} ${error.statusText}`}
      </p>
    </div>
  );
}
