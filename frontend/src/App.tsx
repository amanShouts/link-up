import { useUser } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomSignIn from "./pages/CustomSignIn";
import Home from "./pages/Home";
import CustomSignUp from "./pages/CustomSignUp";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";
import Profile from "./pages/Profile";

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {

    const currentRoute = window.location.pathname;

    const publicRoutes = ['/','/signup'];

    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute) ) {
      navigate('/login');
    }

    if ( isSignedIn ) {
      console.log("user: ",user)
    }
    else {

    }

  }, [isLoaded, isSignedIn, navigate, window.location ]);

  if (!isLoaded) {
    return <div>Loading...</div>;
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
