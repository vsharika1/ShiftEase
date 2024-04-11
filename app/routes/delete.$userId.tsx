import {
  json,
  redirect,
  type ActionFunction,
  type LoaderFunctionArgs,
} from '@remix-run/node';
import { Form, NavLink, useLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';
import { mgmtClient } from '~/.server/auth0';
import { prisma } from '~/.server/db';

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

export const action: ActionFunction = async ({ request, params }) => {
  await requireAuthedUser(request);
  const userId = params.userId;

  if (typeof userId === 'string') {
    // Check if the user exists in your database
    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (dbUser) {
      // User exists in the database, proceed with deletion

      // Delete the user from your database
      await prisma.user.delete({
        where: { id: userId },
      });
      console.log(`User ${userId} deleted from database.`);
    } else {
      // User does not exist in the database
      console.log(`User ${userId} not found in database, skipping deletion.`);
    }

    // Delete the user from Auth0
    await mgmtClient.users.delete({ id: userId });
    console.log(`User ${userId} deleted from Auth0.`);
  }

  return redirect('/dashboard');
};

export default function DeleteEmployee() {
  const { user } = useLoaderData<LoaderData>();

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm">
        <h3 className="font-bold mb-4 mt-0">Confirm Delete</h3>
        <div>Please confirm, if you want to delete the following user:</div>
        <div className="mt-2">
          <strong>ID:</strong> {user.id}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Name: </strong>
          {user.first_name || user.last_name
            ? `${user.first_name} ${user.last_name}`.trim()
            : 'Not available'}
        </div>
        <Form method="post">
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Confirm
            </button>
            <NavLink
              to="/employee-list"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-150 ease-in-out"
            >
              Cancel
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
}
