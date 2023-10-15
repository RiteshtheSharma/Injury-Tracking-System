import NavigationBar from "./components/NavigationBar";

import AuthComp from "./components/AuthComp";
import LogInForm from "./components/LoginForm";
import SignInForm from "./components/SignInForm";
import { Route, Routes } from "react-router-dom";
function App() {
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
         
        </Routes>
   
    </>
  );
}

export default App;
