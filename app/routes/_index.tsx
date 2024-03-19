import { NavLink } from '@remix-run/react';

import HelloWorld from '~/components/HelloWorld';

export default function Home() {
  return (
    <>
      <HelloWorld>one</HelloWorld>
      <NavLink to="/dashboard" className="uppercase font-bold">
        Login
      </NavLink>
    </>
  );
}
