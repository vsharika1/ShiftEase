import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { prisma } from '~/.server/db';
import { UserSubmission } from '~/types/form/UserSubmission';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Convert formData to an object
  const formObj = Object.fromEntries(formData);
  // Validate formData using Zod
  const result = UserSubmission.safeParse(formObj);

  if (!result.success) {
    // Handle validation errors
    return json(
      { success: false, errors: result.error.format() },
      { status: 400 },
    );
  }

  // Destructure validated data
  const { id, role } = result.data;

  try {
    // Hash password

    const newUser = await prisma.user.create({
      data: {
        id, // Assuming your user model uses an 'email' field
        // password,
        role,
        // firstName,
        // lastName,
        // contactNumber,
      },
    });

    return json({ success: true, newUser });
  } catch (error) {
    console.error('Error adding new user:', error);
    return json(
      { success: false, error: 'Failed to add new user.' },
      { status: 500 },
    );
  }
};
