import { redirect } from '@remix-run/node';

import type { UserInfo } from '~/.server/auth';

export function hasRole(userInfo: UserInfo, role: string | string[]) {
  const [, dbInfo] = userInfo;
  const roles = Array.isArray(role) ? role : [role];
  return roles.includes(dbInfo.role);
}

export function requireRole(userInfo: UserInfo, role: string | string[]) {
  if (!hasRole(userInfo, role)) throw redirect('/unauthorized');
}
