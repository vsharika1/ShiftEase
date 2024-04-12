import { NavLink } from '@remix-run/react';

interface Props {
  showEmployeeManagement: boolean;
}

export default function NavBar({ showEmployeeManagement }: Props) {
  return (
    <div className="flex justify-center space-x-4">
      <NavLink
        to="/dashboard"
        className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
      >
        Home
      </NavLink>

      <NavLink
        to="/dashboard/availability"
        className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
      >
        My Availability
      </NavLink>

      {showEmployeeManagement && (
        <>
          <NavLink
            to="/employee-list"
            className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
          >
            View Employee List
          </NavLink>
          <NavLink
            to="/schedule/shift"
            className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Manage Shifts
          </NavLink>
          <NavLink
            to="/addEmployee"
            className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Add User
          </NavLink>
        </>
      )}

      <NavLink
        to="/logout"
        className="inline-flex items-center justify-center bg-white text-blue-500 font-bold uppercase text-sm px-6 py-2 rounded hover:shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
      >
        Sign out
      </NavLink>
    </div>
  );
}
