import { Form } from '@remix-run/react';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useRemixForm } from 'remix-hook-form';
import { z } from 'zod';

import { userFormResolver } from '~/types/form/UserSubmission';

const EmployeeSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .nonempty({ message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  role: z.string().min(1, { message: 'Role is required' }),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  contact_number: z.string().optional(),
});

type EmployeeFormData = z.infer<typeof EmployeeSchema>;

export default function AddEmployeeForm() {
  const {
    register,
    formState: { errors },
  } = useRemixForm<EmployeeFormData>({
    resolver: userFormResolver,
  });

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden whitespace-nowrap">
      <div className="p-6">
        <div className="font-bold text-2xl mb-2">Add New User</div>
        <Form method="post" className="space-y-4 pt-4 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              {...register('email')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              {...register('password')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              required
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role:
            </label>
            <input
              {...register('role')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              required
            />
            {errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name:
            </label>
            <input
              {...register('first_name')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last Name:
            </label>
            <input
              {...register('last_name')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact_number"
            >
              Contact Number:
            </label>
            <input
              {...register('contact_number')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact_number"
            />
            {errors.contact_number && (
              <p className="text-red-500">{errors.contact_number.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <PersonAddIcon className="text-base mr-1" />
              Add User
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
