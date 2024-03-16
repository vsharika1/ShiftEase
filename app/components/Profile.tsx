import { useState, type ChangeEvent } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

interface Props {
    user_id: number,
    email: string,
    first_name: string,
    last_name: string,
    contact_number: string,
    role: {
        role_name: string,
    },
}

export default function Profile({ user_id, email, first_name, last_name, contact_number, role, }: Props) {
    const [userProfile, setUserProfile] = useState({ email, first_name, last_name, contact_number });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => {
    setIsEditing(false);
    setUserProfile({ email, first_name, last_name, contact_number });
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded-lg shadow relative">
      <h1 className="text-2xl font-semibold mb-6 mt-0 border-b pb-2">
        User Profile
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Non-editable fields */}
        <div>
          <label className="text-gray-600 block mb-1">User ID:</label>
          <div className="text-gray-800">{user_id}</div>
        </div>
        <div>
          <label className="text-gray-600 block mb-1">Role:</label>
          <div className="text-gray-800">{role.role_name}</div>
        </div>

        {/* Editable fields */}
        <div>
          <label className="text-gray-600 block mb-1">First Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="firstName"
              value={first_name}
              onChange={handleChange}
              className="text-gray-800 w-full rounded-lg"
            />
          ) : (
            <div className="text-gray-800">{userProfile.first_name}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 block mb-1">Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={last_name}
              onChange={handleChange}
              className="text-gray-800 w-full rounded-lg"
            />
          ) : (
            <div className="text-gray-800">{userProfile.last_name}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 block mb-1">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="text-gray-800 w-full rounded-lg"
            />
          ) : (
            <div className="text-gray-800">{userProfile.email}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 block mb-1">Contact Number:</label>
          {isEditing ? (
            <input
              type="tel"
              name="contactNumber"
              value={contact_number}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="text-gray-800 w-full rounded-lg"
            />
          ) : (
            <div className="text-gray-800">{userProfile.contact_number}</div>
          )}
        </div>
      </div>

      <div className="flex justify-end border-t border-gray-200 mt-5 pt-3">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="flex items-center justify-center px-4 py-2 text-white rounded shadow mr-2"
              style={{ backgroundColor: '#008DDA' }}
            >
              <SaveIcon className="h-5 w-5 mr-2" />
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="flex items-center justify-center px-4 py-2 text-white rounded shadow"
              style={{ backgroundColor: 'gray' }}
            >
              <CancelIcon className="h-5 w-5 mr-2" />
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="flex items-center justify-center px-4 py-2 text-white rounded shadow"
            style={{ backgroundColor: '#008DDA' }}
          >
            <EditIcon className="h-5 w-5 mr-2" />
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
