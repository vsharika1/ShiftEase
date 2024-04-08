import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';

import Tooltip from '@mui/material/Tooltip';

interface Role {
  role_id: number;
  role_name: string;
}

interface User {
  user_id: number;
  email: string;
  role_id: number;
  first_name: string;
  last_name: string;
  contact_number: string;
}

const fetchUserData = (userId: number): Promise<User> =>
  Promise.resolve({
    user_id: userId,
    email: 'john.doe@example.com',
    role_id: 2,
    first_name: 'John',
    last_name: 'Doe',
    contact_number: '123-456-7890',
  });

const fetchRoles = (): Promise<Role[]> =>
  Promise.resolve([
    { role_id: 1, role_name: 'Administrator' },
    { role_id: 2, role_name: 'User' },
  ]);

export default function EditEmployeeData({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    void (async () => {
      const userData = await fetchUserData(userId);
      const rolesData = await fetchRoles();
      setUser(userData);
      setRoles(rolesData);
    })();
  }, [userId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUser((currentUser) =>
      currentUser ? { ...currentUser, [name]: value } : null,
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Updated user data:', user);
    // Placeholder for update logic
  };

  if (!user) return <div>Loading...</div>;
  return (
    <div
      className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ maxWidth: '500px' }}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-2xl my-2 flex items-center">
          Edit User Data
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4 mb-4">
          <Tooltip title="User ID is not editable">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User ID:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                value={user.user_id.toString()}
                disabled
              />
            </div>
          </Tooltip>
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
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role_id"
            >
              Role:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role_id"
              name="role_id"
              value={user.role_id}
              onChange={handleChange}
              required
            >
              {roles.map((role) => (
                <option key={role.role_id} value={role.role_id}>
                  {role.role_name}
                </option>
              ))}
            </select>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact_number"
              type="text"
              name="contact_number"
              value={user.contact_number}
              onChange={handleChange}
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
        </form>
      </div>
    </div>
  );
}
