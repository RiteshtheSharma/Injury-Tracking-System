import {} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (auth.user.length<1 ) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};