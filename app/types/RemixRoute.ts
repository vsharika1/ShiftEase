import type { ReactNode } from 'react';

import type { UIMatch } from '@remix-run/react';
import type { RouteModule as ClientRouteModule } from '@remix-run/react/dist/routeModules';
import type { ServerRouteModule } from '@remix-run/server-runtime/dist/routeModules';

import type { Object } from 'ts-toolbelt';

export interface DefinedRouteHandle {
  // Put our route handle properties here.
  // https://remix.run/docs/en/main/route/handle
  breadcrumbs?: (match: UIMatch<unknown, RouteHandle>) => ReactNode[];
}

export type RouteHandle = DefinedRouteHandle | undefined;

export type RemixRouteModule = Object.Assign<
  object,
  [ClientRouteModule, Object.Exclude<ServerRouteModule, ClientRouteModule>]
>;

export type RemixRoute = Required<RemixRouteModule>;
