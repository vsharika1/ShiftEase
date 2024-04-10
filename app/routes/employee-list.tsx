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
import EmployeeList from '~/components/EmployeeList';

interface CombinedUserDetail {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  phoneNumber: string;
}

interface LoaderData {
  users: CombinedUserDetail[]; // Use the type defined for your merged user objects
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuthedUser(request);

  // Fetching users from Auth0
  const response = await mgmtClient.users.getAll();
  const authUsers = response.data;

  // Extract the user_ids from authUsers
  const userIds = authUsers.map((user) => user.user_id);

  // Fetch users from your database that match the userIds
  const dbUsers = await prisma.user.findMany({
    where: {
      id: { in: userIds },
    },
  });

  // Create a map of database users keyed by id for quick access
  const dbUsersMap = new Map(dbUsers.map((user) => [user.id, user]));

  // Merge Auth0 user details with database user details
  const mergedUsers = authUsers.map((authUser) => {
    const dbUser = dbUsersMap.get(authUser.user_id);

    return {
      id: authUser.user_id,
      email: authUser.email,
      first_name: authUser.given_name || 'N/A', // Use Auth0 details or fallback
      last_name: authUser.family_name || 'N/A', // Use Auth0 details or fallback
      role: dbUser?.role ?? 'Unknown', // Use DB details or fallback
      phoneNumber: dbUser?.phoneNumber ?? 'Unknown', // Use DB details or fallback
    };
  });

  return json({ users: mergedUsers });
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userId = formData.get('userId');

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

  return redirect('/employee-list');
};

export default function EmployeeListDisplay() {
  const { users } = useLoaderData<LoaderData>();
  return <EmployeeList users={users} />;
}
