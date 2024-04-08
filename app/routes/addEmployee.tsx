import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';

import { getValidatedFormData } from 'remix-hook-form';

import { requireAuthedUser } from '~/.server/auth';
import { mgmtClient } from '~/.server/auth0';
import { prisma } from '~/.server/db';
import type { UserFormData } from '~/types/form/UserSubmission';
import { userFormResolver } from '~/types/form/UserSubmission';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuthedUser(request);
  return null;
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
    phone_number,
    connection: 'Username-Password-Authentication',
  });

  await prisma.user.create({
    data: {
      id: authUser.user_id,
      role: data.role,
    },
  });

  return redirect('/dashboard'); // TODO: changes this once we have an employee list route
}
