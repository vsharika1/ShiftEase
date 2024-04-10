import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';

import { getValidatedFormData } from 'remix-hook-form';

import { requireAuthedUser } from '~/.server/auth';
import { mgmtClient } from '~/.server/auth0';
import { prisma } from '~/.server/db';
import AddEmployeeForm from '~/components/AddEmployeeForm';
import type { UserFormData } from '~/types/form/UserSubmission';
import { userFormResolver } from '~/types/form/UserSubmission';

interface DBUser {
  id: string;
  role: string;
  phoneNumber: string;
}

interface LoaderData {
  dbUser: DBUser;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const [, dbUser] = await requireAuthedUser(request);
  return json({ dbUser });
}

export async function action({ request }: ActionFunctionArgs) {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<UserFormData>(request, userFormResolver);

  if (errors) return json({ errors, defaultValues });

  const { email, password, given_name, family_name, phone_number } = data;

  const { data: authUser } = await mgmtClient.users.create({
    email,
    password,
    given_name,
    family_name,
    connection: 'Username-Password-Authentication',
  });

  const phoneNumber = phone_number ?? '';

  await prisma.user.create({
    data: {
      id: authUser.user_id,
      role: data.role,
      phoneNumber,
    },
  });

  return redirect('/dashboard'); // TODO: changes this once we have an employee list route
}

export default function AddEmployeeRoute() {
  const { dbUser } = useLoaderData<LoaderData>();
  const userHasAccess =
    dbUser.role === 'Manager' || dbUser.role === 'Administrator';

  return (
    <>
      <div className="flex justify-center space-x-4 my-4">
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
        <div className="flex justify-center mt-4">
          <AddEmployeeForm />
        </div>
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
