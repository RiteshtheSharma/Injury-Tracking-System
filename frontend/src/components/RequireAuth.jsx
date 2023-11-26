// component description : redirect the site to login url if user has not previously login or signup or has logout
// else the children coomponents will render for given url
import {} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import PropTypes from "prop-types";
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (Object.keys(auth.user).length <1 || localStorage.getItem('user')===null ) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
RequireAuth.propTypes = {
  children : PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}