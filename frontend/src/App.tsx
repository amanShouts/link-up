import { useUser } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomSignIn from "./components/Signin/CustomSignIn";
import Home from "./pages/Home";
import CustomSignUp from "./components/Signup/CustomSignUp";
import Landing from "./pages/Landing";

export default function App() {

  const { isSignedIn, user, isLoaded } = useUser();

  console.log('isSignedIn', isSignedIn)
  console.log('user', user)
  console.log('isLoaded', isLoaded)


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/login" element={<CustomSignIn/>}/>
          <Route path="/signup" element={<CustomSignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/landing" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}