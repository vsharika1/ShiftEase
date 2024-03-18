import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';

import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface Role {
  role_id: number;
  role_name: string;
}

// Correctly typing useState for roles
const fetchRoles = () =>
  Promise.resolve([
    { role_id: 1, role_name: 'Administrator' },
    { role_id: 2, role_name: 'User' },
    // Add other roles as necessary
  ]);

export default function AddEmployeeForm() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role_id: '',
    first_name: '',
    last_name: '',
    contact_number: '',
  });

  useEffect(() => {
    const loadRoles = async () => {
      const rolesFromServer = await fetchRoles();
      setRoles(rolesFromServer);
      if (rolesFromServer.length > 0) {
        setFormData((formData) => ({
          ...formData,
          // role_id: rolesFromServer[0].role_id.toString(),
        }));
      }
    };

    void loadRoles();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Integrate actual submit logic here
  };

  return (
    <div className="mx-auto mb-10 bg-white shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '500px' }}>
      <div style={{ padding: '24px' }}>
        <div className="font-bold text-2xl mb-2">Add New User</div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 pt-4 mb-4"
        >
          <div className="mb-4">
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role_id"
            >
              Role:
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="role_id"
              name="role_id"
              value={formData.role_id}
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
              value={formData.first_name}
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
              value={formData.last_name}
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
              value={formData.contact_number}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              type="submit"
            >
              <PersonAddIcon style={{ fontSize: '20px', marginRight: '4px' }} />
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
