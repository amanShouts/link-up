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
import { closeModal, modalDetails, openModal } from './store/slice/modalSlice';
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "./store/slice/userSlice";
import { BACKEND_URL } from "./config";
import { RootState } from './store/store'
import axios from "axios";
import EditProfile from "./pages/EditProfile";
import DetailsModal from "./components/modalStore/DetailsModal";

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedUsers = useSelector(( state: RootState ) => state.users.users );

  const toggleModal = ( type: String ) => {
    dispatch(modalDetails(type))
    dispatch(openModal())
  }

  useEffect(() => {
    const currentRoute = window.location.pathname;

    const publicRoutes = ['/','/signup'];
    
    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute)) {
      navigate("/login");
    }
    if ( isSignedIn && user ) {
      console.log("user: ",user)

      const currentUser = storedUsers.find((el) => el.username === user.username);

      if ( currentUser && ( currentUser?.age === null || currentUser?.city === null || currentUser?.userType == null ) ) {
        console.log("here")
        toggleModal("edit-profile-modal")
      }

    }
    else {
      console.log("user not signied in")
    }

  }, [isLoaded, isSignedIn, navigate, window.location ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_URL + '/users');
        const responseData = await response.json();

        dispatch(addUserDetails(responseData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const usernameArray = storedUsers.map((el) => {
      return el.username;
    })
    
    if ( user && user.username && !usernameArray.includes(user.username) ) {
     
      axios.post(BACKEND_URL+'/save-user',{
        "username": user?.username,
        "name": user.firstName,
        "img":user.imageUrl,
        "lastLogin": user.lastSignInAt,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    }

  }, [storedUsers, user])
  

  if (!isLoaded && window.location.pathname !== "/home") {
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
      <DetailsModal/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<CustomSignIn />} />
        <Route path="/signup" element={<CustomSignUp />} />
        <Route path="/signup/continue" element={<CustomSignIn />} />
        <Route path="/onboarding" element={isSignedIn ? <Onboarding /> : null} />
        <Route path="/home" element={isSignedIn ? <Home/> : null} />
        <Route path="/profile" element={isSignedIn ? <Profile /> : null} />
        <Route path="/edit-profile" element={isSignedIn ? <EditProfile /> : null} />
        <Route path="/mentors" element={isSignedIn ? <MentorList/> : null} />
        <Route path="/mentor/:mentorId" element={isSignedIn ? <MentorProfile/> : null} />
      </Routes>
    </main>
  );
}
