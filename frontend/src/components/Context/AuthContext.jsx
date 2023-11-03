import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState( localStorage.getItem("user") === null ?"{}":localStorage.getItem("user"));
 
  const login = (email,pwd) => {
    const Name = "userName" // will be replaced by server fetched user name
    setuser({email,pwd,Name});
    localStorage.setItem("user",JSON.stringify({email,pwd,Name}));
    navigate('/profile')
  };
  const signin = (username,email,pwd)=>{
    const Name = username ;
    setuser({email,pwd,Name});
    localStorage.setItem("user",JSON.stringify({email,pwd,Name}))
  }
  const logout = () => {
    setuser("{}");
    localStorage.clear()
    console.log("executed logout");
    navigate('');
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