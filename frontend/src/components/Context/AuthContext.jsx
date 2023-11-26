// for managing user details (name , email,pwd,profile img url ) and login , logout and updating user details
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState( localStorage.getItem("user") === null ?{}:JSON.parse(localStorage.getItem("user")));
 
  const login = (email,pwd) => {
    const Name = "userName" // will be replaced by server fetched user name
    const profileImg ="https://avatars.githubusercontent.com/u/72566311?v=4"
    setuser({email,pwd,Name,profileImg});
    localStorage.setItem("user",JSON.stringify({email,pwd,Name,profileImg}));
    
  };
  const signin = (username,email,pwd)=>{
    const Name = username ;
    const profileImg ="https://avatars.githubusercontent.com/u/72566311?v=4"
    setuser({email,pwd,Name,profileImg});
    localStorage.setItem("user",JSON.stringify({email,pwd,Name,profileImg}))
  } 
  const updateUserDetails = (property,value)=>{
 setuser({...user,[property]:value})
 localStorage.setItem("user",JSON.stringify({...user,[property]:value}))
  }
  const logout = () => {
    setuser({});
    localStorage.clear()
    console.log("executed logout");
    navigate('');
  };

  return (
    <AuthContext.Provider value={{ user,updateUserDetails, login,signin, logout,setuser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};