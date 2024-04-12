import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';

import { requireAuthedUser } from '~/.server/auth';
import { mgmtClient } from '~/.server/auth0';
import { prisma } from '~/.server/db';
import EmployeeList from '~/components/EmployeeList';

interface DBUser {
  id: string;
  role: string;
  phoneNumber: string;
}

interface CombinedUserDetail {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  phoneNumber: string;
}

interface LoaderData {
  dbUser: DBUser;
  users: CombinedUserDetail[];
}

export async function loader({ request }: LoaderFunctionArgs) {
  const [, dbUser] = await requireAuthedUser(request);

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

  return json({ dbUser, users: mergedUsers });
}

export default function EmployeeListDisplay() {
  const { dbUser, users } = useLoaderData<LoaderData>();

  const userHasAccess =
    dbUser.role === 'Manager' || dbUser.role === 'Administrator';

  return (
    <>
      <div className="flex justify-center space-x-4">
        <NavLink
          to="/dashboard"
          className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard/availability"
          className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
        >
          My Availability
        </NavLink>

        {['Manager', 'Administrator'].includes(dbUser.role) && (
          <>
            <NavLink
              to="/employee-list"
              className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
            >
              View Employee List
            </NavLink>
            <NavLink
              to="/schedule/shift"
              className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
            >
              Manage Shifts
            </NavLink>
            <NavLink
              to="/addEmployee"
              className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
            >
              Add User
            </NavLink>
          </>
        )}

        <NavLink
          to="/logout"
          className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
        >
          Sign out
        </NavLink>
      </div>
      {userHasAccess ? (
        <EmployeeList users={users} />
      ) : (
        <div className="mt-10 p-6 max-w-lg mx-auto bg-red-100 border-l-4 border-red-500 text-red-700">
          <h3 className="text-lg font-medium mt-0">Access Denied</h3>
          <div className="mt-2">
            You don&apos;t have access to this resource. Please contact the
            administrator for more information.
          </div>
        </div>
      )}
    </>
  );
}
