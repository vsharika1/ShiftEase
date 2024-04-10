import { Form } from '@remix-run/react';

interface User {
  id: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  phoneNumber: string;
}

interface EditEmployeeDataProps {
  user: User;
}

export default function EditEmployeeData({ user }: EditEmployeeDataProps) {
  return (
    <div
      className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ maxWidth: '500px' }}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-2xl my-2 flex items-center">
          Edit User Data
        </div>
        <Form
          method="post"
          action={`/edit-employee/${encodeURIComponent(user.id)}`}
        >
          {/* Hidden field for user ID */}
          <input type="hidden" name="id" value={user.id} />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User ID:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="text"
              value={user.id}
              disabled
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={user.email}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              name="role"
              value={user.role}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              name="first_name"
              value={user.first_name}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              name="last_name"
              value={user.last_name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Contact Number:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={user.phoneNumber}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update User
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
