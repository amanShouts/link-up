import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import LandingPage from './routes/LandingPage.tsx'
import MentorList from './routes/MentorList.tsx'
import { ModeToggle } from './components/mode-toggle.tsx';
import MentorProfile from './routes/MentorProfile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/mentor",
    element: <MentorList/>
  },
  {
    path: "/mentor/:mentorId",    
    element: <MentorProfile/>
  }
]);
 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
      <RouterProvider router={router} />
    {/* </ClerkProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
)