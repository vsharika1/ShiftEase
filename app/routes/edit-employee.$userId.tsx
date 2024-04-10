import {
  json,
  redirect,
  type ActionFunction,
  type LoaderFunctionArgs,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';
import { mgmtClient } from '~/.server/auth0';
import { prisma } from '~/.server/db';
import EditEmployeeData from '~/components/EditEmployeeData';

interface User {
  id: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  phoneNumber: string;
}

interface LoaderData {
  user: User;
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireAuthedUser(request);

  const userId = params.userId;

  const dbUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const response = await mgmtClient.users.get({ id: userId! });
  const authUsers = response.data;

  const currentUser: User = {
    id: authUsers.user_id,
    email: authUsers.email,
    role: dbUser?.role ?? 'N/A',
    first_name: authUsers.given_name,
    last_name: authUsers.family_name,
    phoneNumber: dbUser?.phoneNumber ?? 'Unknown',
  };

  return json({ user: currentUser });
}

export const action: ActionFunction = async ({ request }) => {
  await requireAuthedUser(request);

  const formData = await request.formData();
  const userId = formData.get('id')?.toString();
  const email = formData.get('email')?.toString();
  const role = formData.get('role')?.toString();
  const first_name = formData.get('first_name')?.toString();
  const last_name = formData.get('last_name')?.toString();
  const phoneNumber = formData.get('phoneNumber')?.toString();

  // Update Auth0 user
  await mgmtClient.users.update(
    { id: userId! },
    {
      email: email,
      given_name: first_name,
      family_name: last_name,
      // Add any other fields that Auth0 supports and you wish to update.
    },
  );

  // Update or create user in the database
  await prisma.user.upsert({
    where: { id: userId },
    update: { role, phoneNumber },
    create: {
      id: userId!,
      role,
      phoneNumber,
    },
  });

  // Redirect
  return redirect('/employee-list');
};

export default function EditEmployeeRoute() {
  const { user } = useLoaderData<LoaderData>();
  return <EditEmployeeData user={user} />;
}
