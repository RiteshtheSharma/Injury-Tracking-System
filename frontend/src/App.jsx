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
import Report from "./components/Report";
import { useReportList } from "./components/Context/ReportListContext";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
 const auth = useAuth();
const ReportListFuncObj = useReportList() ;
 useEffect(() => {
  
  if(localStorage.getItem('user')!==null  )
  {ReportListFuncObj.initializeReportList()
  
  
  }
   auth.setuser(auth?.user) 
  
   
 }, [])
 
  
  return (
   <>
      
        <NavigationBar />
        <Routes>
        <Route path="/" element={<Home/>}/>
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
           <Route path="newreport" element={<RequireAuth><NewReport/></RequireAuth>} />
           <Route path="settings" element={<RequireAuth><Settings/></RequireAuth>} />
           <Route path="report/:id" element={<RequireAuth><Report/></RequireAuth>} />
        </Routes>
        <Footer/>
        </>
   
  
  );
}

export default App;
