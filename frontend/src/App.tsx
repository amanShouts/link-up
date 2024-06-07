import * as React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import { modalDetails, openModal } from './store/slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentUser, addUserDetails } from './store/slice/userSlice';
import { BACKEND_URL } from './config';
import { RootState } from './store/store';
import axios from 'axios';
import DetailsModal from './components/modalStore/DetailsModal';
import { Toaster } from 'react-hot-toast';

const CustomSignIn = React.lazy(() => import('./pages/CustomSignIn'));
const Home = React.lazy(() => import('./pages/Home'));
const CustomSignUp = React.lazy(() => import('./pages/CustomSignUp'));
const Landing = React.lazy(() => import('./pages/Landing'));
const Onboarding = React.lazy(() => import('./pages/Onboarding'));
const MentorList = React.lazy(() => import('./pages/MentorList'));
const MentorProfile = React.lazy(() => import('./pages/MentorProfile'));
const EditProfile = React.lazy(() => import('./pages/EditProfile'));
const Profile = React.lazy(() => import('./pages/Profile'));

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedUsers = useSelector((state: RootState) => state.users.users);
  const { isOpen, refresh } = useSelector((state: RootState) => state.modal);

  const toggleModal = (type: string) => {
    dispatch(modalDetails(type));
    dispatch(openModal());
  };

  useEffect(() => {
    const currentRoute = window.location.pathname;

    const publicRoutes = ['/', '/signup', '/login'];

    if (isLoaded && !isSignedIn && !publicRoutes.includes(currentRoute)) {
      navigate('/login');
    }
    if (isSignedIn && user) {
      const currentUser = storedUsers.find((el) => el.username === user.username);

      dispatch(addCurrentUser(currentUser));

      if ( currentUser && (currentUser?.age === null || currentUser?.city === null || currentUser?.type == null) ) {
        console.log('here');
        toggleModal('edit-profile-modal');
      }
    }
  }, [isLoaded, isSignedIn, navigate, window.location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('refresh',refresh)
        const response = await fetch(BACKEND_URL + '/users');
        const responseData = await response.json();

        dispatch(addUserDetails(responseData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isOpen, window.location, refresh]);

  useEffect(() => {
    const usernameArray = storedUsers.map((el) => {
      return el.username;
    });

    if (user && user.username && !usernameArray.includes(user.username)) {
      axios
        .post(BACKEND_URL + '/save-user', {
          username: user?.username,
          name: user.firstName,
          img: user.imageUrl,
          lastLogin: user.lastSignInAt,
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [storedUsers, user]);

  if (!isLoaded && window.location.pathname !== '/home') {
    return (
      <div className={'w-screen h-screen bg-white dark:bg-black dark:text-white flex items-center justify-center'}>
        <Loader2 className={'animate-spin text-black dark:text-neutral-200 w-20 h-20'} />
      </div>
    );
  }

  return (
    <main className="dark:bg-black dark:text-white">
      <Navbar />
      <DetailsModal />
      <Toaster />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<CustomSignIn />} />
        <Route path="/signup" element={<CustomSignUp />} />
        <Route path="/signup/continue" element={<CustomSignIn />} />
        <Route path="/onboarding" element={isSignedIn ? <Onboarding /> : null} />
        <Route path="/home" element={isSignedIn ? <Home /> : null} />
        <Route path="/profile" element={isSignedIn ? <Profile /> : null} />
        <Route path="/edit-profile" element={isSignedIn ? <EditProfile /> : null} />
        <Route path="/mentors" element={isSignedIn ? <MentorList /> : null} />
        <Route path="/mentors/:mentorId" element={isSignedIn ? <MentorProfile /> : null} />
      </Routes>
    </main>
  );
}
