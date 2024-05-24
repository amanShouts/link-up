import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const { isSignedIn, user, isLoaded } = useUser();


  return (
    <div>
      {
        isSignedIn ? <SignOutButton /> : <>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Signup</Link>
        </>
      }
    </div>
  )
}
