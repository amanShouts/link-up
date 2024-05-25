import { useUser } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomSignIn from "./components/Signin/CustomSignIn";
import Home from "./pages/Home";
import CustomSignUp from "./components/Signup/CustomSignUp";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";

export default function App() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {

    const currentRoute = window.location.pathname;

    const publicRoutes = ['/'];

    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute) ) {
      navigate('/login');
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
      </Routes>
    </>
  );
}
