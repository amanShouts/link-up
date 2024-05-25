import { useUser } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomSignIn from "./pages/CustomSignIn";
import Home from "./pages/Home";
import CustomSignUp from "./pages/CustomSignUp";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import Profile from "./pages/Profile";

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const currentRoute = window.location.pathname;

    const publicRoutes = ['/','/signup'];
    
    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute)) {
      navigate("/login");
    }
    if ( isSignedIn ) {
      console.log("user: ",user)
    }
    else {

    }

  }, [isLoaded, isSignedIn, navigate, window.location ]);

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
        <Route path="/onboarding" element={isSignedIn ? <Onboarding /> : null} />
        <Route path="/home" element={isSignedIn ? <Home /> : null} />
        <Route path="/profile" element={isSignedIn ? <Profile /> : null} />

      </Routes>
    </>
  );
}
