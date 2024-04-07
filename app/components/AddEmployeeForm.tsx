import { Form } from '@remix-run/react';

import { zodResolver } from '@hookform/resolvers/zod';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useRemixForm } from 'remix-hook-form';
import { z } from 'zod';

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

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
    // handleSubmit,
    formState: { errors },
  } = useRemixForm<EmployeeFormData>({
    resolver: zodResolver(EmployeeSchema),
  });

  return (
    <div
      className="mx-auto mb-10 bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ maxWidth: '500px' }}
    >
      <div style={{ padding: '24px' }}>
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
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/u,
                  message: 'Invalid email format',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              required
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message?.toString()}</p>
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
              {...register('password', { required: 'Password is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              required
            />
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role_id"
            >
              Role:
            </label>
            <input
              {...register('role', { required: 'Role is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              name="role"
              required
            />
            {errors.role && (
              <p className="text-red-500">{errors.role.message?.toString()}</p>
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
              type="text"
              name="first_name"
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
              type="text"
              name="last_name"
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
              {...register('contact_number', {
                required: 'Contact number is required',
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact_number"
              type="text"
              name="contact_number"
              required
            />
            {errors.contact_number && (
              <p className="text-red-500">
                {errors.contact_number.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <PersonAddIcon style={{ fontSize: '20px', marginRight: '4px' }} />{' '}
              Add User
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
