import { NavLink } from '@remix-run/react';

import HelloWorld from '~/components/HelloWorld';

export default function Home() {
  return (
    <>
      <HelloWorld />
      <div className="text-center mt-4">
        <NavLink
          to="/dashboard"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Login
        </NavLink>
      </div>
    </>
  );
}
