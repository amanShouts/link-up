import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { ModeButton } from "@/components/mode-button.tsx";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <div
      className={
        "border-b flex justify-between dark:text-white pl-6 dark:border-neutral-800 items-center sticky top-0 z-[100] bg-white/40 dark:bg-black/40 backdrop-blur px-6 py-3"
      }
    >
      <h1 className={"font-semibold"}>Link-up.</h1>

      <div className={"flex gap-8 items-center text-sm"}>
        <Link to={"/"}>Resources</Link>
        <Link to={"/"}>Mentors</Link>
        <Link to={"/"}>Investors</Link>
        <Link to={"/"}>Entrepreneur</Link>
        <ModeButton />

        {isSignedIn ? (
          <SignOutButton />
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link
              className={
                "bg-primary dark:text-black text-neutral-200 px-4 py-2 rounded-lg mr-8 my-3"
              }
              to={"/signup"}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
