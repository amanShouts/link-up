import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const { isSignedIn, user, isLoaded } = useUser();


  return (
    <div className={"border-b flex justify-between pl-6 border items-center sticky top-0 z-[100] bg-white/40 backdrop-blur"}>
        <h1 className={"font-semibold"}>Link-up.</h1>

        <div className={"flex gap-8 items-center text-sm"}>
          <Link to={"/"}>Resources</Link>
          <Link to={"/"}>Mentors</Link>
          <Link to={"/"}>Investors</Link>
          <Link to={"/"}>Entrepreneur</Link>

          {
             isSignedIn ? <SignOutButton /> : <>
               <Link to={'/login'}>Login</Link>
               <Link className={"bg-primary text-neutral-200 px-4 py-2 rounded-lg mr-8 my-3"} to={'/signup'}>Signup</Link>
            </>
          }
        </div>

    </div>
  )
}
