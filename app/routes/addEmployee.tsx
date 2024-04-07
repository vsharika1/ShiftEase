/* eslint-disable @typescript-eslint/no-base-to-string */
import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function isNonNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  // const password = formData.get('password');
  const role = formData.get('role');
  // const first_name = formData.get('first_name');
  // const last_name = formData.get('last_name');
  // const contact_number = formData.get('contact_number');

  if (!isNonNull(email) || !isNonNull(role)) {
    return json({ success: false, error: 'Required fields are missing.' });
  } else {
    try {
      const newUser = await prisma.user.create({
        data: {
          id: email.toString(),
          // password: password,
          role: role.toString(),
          // first_name: first_name.toString(),
          // last_name: last_name.toString(),
          // contact_number: contact_number.toString(),
        },
      });
      return json({ success: true, newUser });
    } catch (error) {
      console.error('Error adding new user:', error);
      return json({ success: false, error: 'Failed to add new user.' });
    }
  }
};
