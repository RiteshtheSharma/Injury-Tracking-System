import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const login = (email,pwd) => {
    setuser({email,pwd});
    localStorage.setItem("user",JSON.stringify({email,pwd}));
  };
  const signin = (username,email,pwd)=>{
    setuser({email,pwd});
    localStorage.setItem("user",JSON.stringify({email,pwd}))
  }
  const logout = () => {
    setuser(null);
    localStorage.setItem("user",null);
  };
  return (
    <AuthContext.Provider value={{ user, login,signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};