import { useClerk } from '@clerk/clerk-react';

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    // Clicking on this button will sign out a user
    // and reroute them to the "/" (home) page.
    <button onClick={() => signOut({ redirectUrl: '/' })}>Sign out</button>
  );
};
