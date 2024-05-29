import { useUser } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomSignIn from "./pages/CustomSignIn";
import Home from "./pages/Home";
import CustomSignUp from "./pages/CustomSignUp";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import Profile from "./pages/MentorProfile";
import MentorList from "./pages/MentorList";
import MentorProfile from "./pages/MentorProfile";
import Navbar from "./components/Navbar/Navbar";
import { Resources } from "./pages/Resrouces";

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const currentRoute = window.location.pathname;

    const publicRoutes = ['/','/signup','/resources'];
    
    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute)) {
      navigate("/login");
    }
    if ( isSignedIn ) {
      console.log("user: ",user)
    }
    else {
      console.log("user not signied in")
    }

  }, [isLoaded, isSignedIn, navigate, window.location ]);

  if (!isLoaded) {
    return (
      <div
        className={
          "w-screen h-screen bg-white dark:bg-black dark:text-white flex items-center justify-center"
        }
      >
        <Loader2
          className={"animate-spin text-black dark:text-neutral-200 w-20 h-20"}
        />
      </div>
    );
  }

  return (
    <main className="dark:bg-black dark:text-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<CustomSignIn />} />
        <Route path="/signup" element={<CustomSignUp />} />
        <Route path="/onboarding" element={isSignedIn ? <Onboarding /> : null} />
        <Route path="/home" element={isSignedIn ? <Home /> : null} />
        <Route path="/profile" element={isSignedIn ? <Profile /> : null} />
        <Route path="/mentor" element={isSignedIn ? <MentorList/> : null} />
        <Route path="/mentor/:mentorId" element={isSignedIn ? <MentorProfile/> : null} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </main>
  );
}
