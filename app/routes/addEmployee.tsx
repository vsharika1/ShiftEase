import type {
  ActionFunction,
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { json } from '@remix-run/node';

import { getValidatedFormData } from 'remix-hook-form';

import { requireAuthedUser } from '~/.server/auth';
import { prisma } from '~/.server/db';
import type { UserFormData } from '~/types/form/UserSubmission';
import { userFormResolver } from '~/types/form/UserSubmission';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuthedUser(request);
  return null;
}

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const { errors, data } = await getValidatedFormData<UserFormData>(
    request,
    userFormResolver,
  );

  if (errors) return json(errors);

  const newUser = await prisma.user.create({
    data: {
      ...data,
    },
  });

  return json(newUser);
};
