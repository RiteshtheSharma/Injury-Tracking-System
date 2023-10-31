import NavigationBar from "./components/NavigationBar";
import AuthComp from "./components/AuthComp";
import LogInForm from "./components/LoginForm";
import SignInForm from "./components/SignInForm";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import Profile from "./components/Profile"
import Logout from "./components/Logout";
import NewReport from "./components/NewReport";
import { useAuth } from "./components/Context/AuthContext";
import { useEffect } from "react";
function App() {
 const auth = useAuth()
 useEffect(() => {
   auth.setuser(JSON.parse(auth?.user))
 
   
 }, [])
 
  
  return (
   <>
      
        <NavigationBar />
        <Routes>
        <Route path="login" element={
         <AuthComp type={"Log In"}>
            <LogInForm />
          </AuthComp>} />
        <Route path="signin" element={ <AuthComp type={"Sign In"}>
            <SignInForm />
          </AuthComp>} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
               </RequireAuth>
            }
          />
           <Route path="logout" element={<RequireAuth><Logout /></RequireAuth>} />
           <Route path="newreport" element={<NewReport/>} />
           <Route path="settings" element={<>{"settings"}</>} />
        </Routes></>
     
  
  );
}

export default App;
