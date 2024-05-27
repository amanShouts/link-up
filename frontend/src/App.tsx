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
import { useDispatch } from "react-redux";
import { addUserDetails } from "./store/slice/userSlice";

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      console.log("user not signied in")
    }

  }, [isLoaded, isSignedIn, navigate, window.location ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000'+ '/users');
        const responseData = await response.json();
        
        console.log('responseData',responseData)
        dispatch(addUserDetails(responseData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
      </Routes>
    </main>
  );
}
