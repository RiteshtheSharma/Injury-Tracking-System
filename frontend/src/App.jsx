import NavigationBar from "./components/NavigationBar";
import { AuthProvider } from "./components/Context/AuthContext";
import AuthComp from "./components/AuthComp";
import LogInForm from "./components/LoginForm";
import SignInForm from "./components/SignInForm";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import Profile from "./components/Profile"
function App() {
  return (
    <AuthProvider>
      
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
        </Routes>
   
    </AuthProvider>
  );
}

export default App;
