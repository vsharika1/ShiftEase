import { NavLink } from '@remix-run/react';

export default function SignedOut() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        You are signed out.
      </h2>
      <NavLink to="/" className="text-blue-600 hover:text-blue-800 font-medium">
        Click here to return home.
      </NavLink>
    </div>
  );
}
