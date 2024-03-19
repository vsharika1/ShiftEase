import { NavLink } from '@remix-run/react';

export default function SignedOut() {
  return (
    <>
      <h2>You are signed out.</h2>
      <NavLink to="/">Click here to return home.</NavLink>
    </>
  );
}
