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

const handleMoreInfo = (userId: string) => {
  console.log('More info for user', userId);
  // Implement more info logic here, such as displaying a modal or redirecting to a detailed view
};

const handleEdit = (userId: string) => {
  console.log('Edit user', userId);
  // Implement edit logic here
};

const handleDelete = (userId: string) => {
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
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2">
                  ID
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2">
                  Email
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2">
                  Role
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2">
                  First Name
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2">
                  Last Name
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2">
                  Contact Number
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-s font-semibold text-gray-600 uppercase p-2" />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-gray-200 bg-white text-sm p-2">
                    {user.id}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm p-2">
                    {user.email}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm p-2">
                    {user.role}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm p-2">
                    {user.first_name || 'N/A'}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm p-2">
                    {user.last_name || 'N/A'}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm p-2">
                    {user.phoneNumber || 'N/A'}
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm flex justify-start items-center p-2">
                    <button
                      onClick={() => handleMoreInfo(user.id)}
                      className="text-gray-500 hover:text-gray-700 p-2 mr-2"
                    >
                      More Info
                    </button>
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-500 hover:text-blue-700 p-2 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      Delete
                    </button>
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
