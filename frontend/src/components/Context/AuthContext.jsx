import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState( localStorage.getItem("user") === null ?"":localStorage.getItem("user"));
 
  const login = (email,pwd) => {
    setuser({email,pwd});
    localStorage.setItem("user",JSON.stringify({email,pwd}));
  };
  const signin = (username,email,pwd)=>{
    setuser({email,pwd});
    localStorage.setItem("user",JSON.stringify({email,pwd}))
  }
  const logout = () => {
    setuser("");
    localStorage.clear()
    console.log("executed logout");
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user,setuser, login,signin, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};