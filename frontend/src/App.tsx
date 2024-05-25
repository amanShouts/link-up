import { useUser } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomSignIn from "./components/Signin/CustomSignIn";
import Home from "./pages/Home";
import CustomSignUp from "./components/Signup/CustomSignUp";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function App() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const currentRoute = window.location.pathname;

    const publicRoutes = ["/", "/home"];

    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute)) {
      navigate("/login");
    }
  }, [isLoaded, isSignedIn, navigate, window.location]);

  if (!isLoaded) {
    return (
      <div
        className={
          "w-screen h-screen bg-white dark:bg-black flex items-center justify-center"
        }
      >
        <Loader2
          className={"animate-spin text-black dark:text-neutral-200 w-20 h-20"}
        />
      </div>
    );
  }

  return (
    <>
      <Routes>
        {/* <Navbar/> */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<CustomSignIn />} />
        <Route path="/signup" element={<CustomSignUp />} />
        <Route
          path="/onboarding"
          element={isSignedIn ? <Onboarding /> : null}
        />
        <Route path="/home" element={isSignedIn ? null : <Home />} />
      </Routes>
    </>
  );
}
