import { createContext, useContext, useState,useEffect } from "react";
const ResponsiveScreenContext = createContext(null);
export const ResponsiveScreenProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


  return (
    <ResponsiveScreenContext.Provider value={{windowWidth, setWindowWidth}}>
      {children}
    </ResponsiveScreenContext.Provider>
  );
};
export const useResponsiveScreen = () => {
  return useContext(ResponsiveScreenContext);
};