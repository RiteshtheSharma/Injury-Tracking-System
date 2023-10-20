import {useState} from 'react'
import { Link } from "react-router-dom";

import { useAuth } from "./Context/AuthContext";
import {

    Avatar,
    Heading,
  
    
  } from "grommet";
const UserInfo = ({userName,profileImg,emailID}) => {
    const [linkStyle, setlinkStyle] = useState({
        textDecoration: "none",
        color: "#1F2328",
      });
   
      const onMouseOver = () => {
        setlinkStyle({ textDecoration: "underline", color: "#0074CC" });
      };
      const onMouseOut = () => {
        setlinkStyle({ textDecoration: "none", color: "#1F2328" });
      };
    
     
  return (
    <>
    <Avatar
    size="5xl"
    src={profileImg}
    border={{ color: "#7D4CDB", size: "small" ,flex:"1 0 auto"}}
  />
  {/* will be replaced by userObj.name */}
  <Heading level={1} margin="none" style={{ fontFamily: "sans-serif" }}>
    {userName}
  </Heading>
  <Link
    to={`mailto:${emailID}`}
    style={linkStyle}
    onMouseOver={() => onMouseOver()}
    onMouseOut={() => onMouseOut()}
  >
    {emailID}
  </Link>
  </>
  )
}

export default UserInfo;