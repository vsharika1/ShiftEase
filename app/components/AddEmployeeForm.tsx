import { Form } from '@remix-run/react';

import { useRemixForm } from 'remix-hook-form';

import {
  userFormResolver,
  type UserFormData,
} from '~/types/form/UserSubmission';

export default function AddEmployeeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRemixForm<UserFormData>({
    resolver: userFormResolver,
  });

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-2/5">
      <div className="p-6">
        <div className="font-bold text-2xl mb-2">Add New User</div>
        <Form onSubmit={handleSubmit} className="space-y-4 pt-4 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              {...register('email')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              autoComplete="off"
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
              autoComplete="new-password"
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
            <select
              {...register('role')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              defaultValue=""
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="Manager">Manager</option>
              <option value="Associate">Associate</option>
            </select>
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
              {...register('given_name')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              autoComplete="off"
            />
            {errors.given_name && (
              <p className="text-red-500">{errors.given_name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last Name:
            </label>
            <input
              {...register('family_name')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              autoComplete="off"
            />
            {errors.family_name && (
              <p className="text-red-500">{errors.family_name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact_number"
            >
              Contact Number:
            </label>
            <input
              {...register('phoneNumber')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact_number"
              type="tel"
              autoComplete="off"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              Add User
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
