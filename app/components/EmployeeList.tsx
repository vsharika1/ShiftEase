import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

interface User {
  user_id: number;
  email: string;
  role: {
    role_name: string;
  };
  first_name: string;
  last_name: string;
  contact_number: string;
}

interface EmployeeListProps {
  users: User[];
}

const handleMoreInfo = (userId: number) => {
  console.log('More info for user', userId);
  // Implement more info logic here, such as displaying a modal or redirecting to a detailed view
};

const handleEdit = (userId: number) => {
  console.log('Edit user', userId);
  // Implement edit logic here
};

const handleDelete = (userId: number) => {
  console.log('Delete user', userId);
  // Implement delete logic here
};

export default function EmployeeList({ users }: EmployeeListProps) {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Employee Directory
      </h1>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 bg-white">
          <table className="leading-normal" style={{ minWidth: '100%' }}>
            <thead>
              <tr>
                <th
                  className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase"
                  style={{ padding: '6px' }}
                >
                  User ID
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase">
                  Email
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase">
                  Role
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase">
                  First Name
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase">
                  Last Name
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase">
                  Contact Number
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase" />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.user_id}>
                  <td
                    className="border-b border-gray-200 bg-white text-sm"
                    style={{ padding: '6px' }}
                  >
                    {user.user_id}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm">
                    {user.email}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm">
                    {user.role.role_name}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm">
                    {user.first_name || 'N/A'}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm">
                    {user.last_name || 'N/A'}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm">
                    {user.contact_number || 'N/A'}
                  </td>
                  <td
                    className="border-b border-gray-200 bg-white text-sm flex justify-start items-center"
                    style={{ padding: '6px' }}
                  >
                    <Tooltip title="More Info">
                      <button
                        onClick={() => handleMoreInfo(user.user_id)}
                        className="text-gray-500 hover:text-gray-700 p-2 mr-2"
                      >
                        <InfoIcon fontSize="small" />
                      </button>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <button
                        onClick={() => handleEdit(user.user_id)}
                        className="text-blue-500 hover:text-blue-700 p-2 mr-2"
                      >
                        <EditIcon fontSize="small" />
                      </button>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <button
                        onClick={() => handleDelete(user.user_id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <DeleteIcon fontSize="small" />
                      </button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
