import { Routes, Route, useNavigate } from "react-router-dom";

import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import DashBoard from "./pages/Dashboard";
import Index from "./pages/Index";
import Attandance from "./pages/Attendance";
import AttendanceForm from "./pages/Forms";
import Auth from "./pages/Auth";
import Layout from "./layout";
import GetStuds from "./pages/GetStuds";

const App: React.FC = () => {
 
  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable key");
  }
  const clerkKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  const navigate = useNavigate();
  // console.log(clerkKey);
  return (
    <>
      <ClerkProvider publishableKey={clerkKey} navigate={(to) => navigate(to)}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/auth"
              element={
                <>
                  <SignedIn>
                    <DashBoard />
                  </SignedIn>
                  <SignedOut>
                    <Auth />
                  </SignedOut>
                </>
              }
            />
          
            <Route
              path="/dashboard"
              element={
                <>
                  <SignedIn>
                    <DashBoard />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route path="/attendance" element={<Attandance />} />
            <Route path="/forms" element={<AttendanceForm />} />
            <Route path='/allstuds' element={<GetStuds/>} />
          </Route>
        </Routes>
        </ClerkProvider>
    </>
  );
};

export default App;
