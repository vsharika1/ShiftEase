import { NavLink } from '@remix-run/react';

interface User {
  id: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  phoneNumber: string;
}

interface EmployeeListProps {
  users: User[];
}

export default function EmployeeList({ users }: EmployeeListProps) {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Employee Directory
      </h1>
      <div className="shadow-xl rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4">
                ID
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4">
                Email
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4">
                Role
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4">
                First Name
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4">
                Last Name
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4">
                Contact Number
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase p-4" />
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700">
                  {user.id}
                </td>
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700">
                  {user.role}
                </td>
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700">
                  {user.first_name || 'N/A'}
                </td>
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700">
                  {user.last_name || 'N/A'}
                </td>
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700">
                  {user.phoneNumber || 'N/A'}
                </td>
                <td className="border-b border-gray-200 p-4 text-sm text-gray-700 flex items-center space-x-4">
                  <NavLink
                    to={`/employeeInfo/${encodeURIComponent(user.id)}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    More Info
                  </NavLink>
                  <NavLink
                    to={`/edit-employee/${encodeURIComponent(user.id)}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </NavLink>
                  <NavLink
                    to={`/delete/${encodeURIComponent(user.id)}`}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
