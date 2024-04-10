import { json, type LoaderFunctionArgs } from '@remix-run/node';
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

export default function EmployeeListDisplay() {
  const { users } = useLoaderData<LoaderData>();
  return <EmployeeList users={users} />;
}
