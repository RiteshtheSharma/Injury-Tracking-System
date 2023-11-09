import { Link } from "grommet-icons";
import {

    Avatar,
    Heading,
  
    
  } from "grommet";
  import { useState } from "react";
import { useAuth } from './Context/AuthContext';
const Settings = () => {
    const auth = useAuth();
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
    <><Avatar
    size="5xl"
    src={auth?.profileImg}
    border={{ color: "#7D4CDB", size: "small" }}
    style={{minHeight:"192px"}}
  />
  <Heading level={1} margin="none" style={{ fontFamily: "sans-serif" ,textTransform:"capitalize"}}>
    {auth?.Name}
  </Heading>
  <Link
    to={`mailto:${auth?.email}`}
    style={linkStyle}
    onMouseOver={() => onMouseOver()}
    onMouseOut={() => onMouseOut()}
  >
    {auth?.email}
  </Link>
  
  
  
  
  
  </>
  )
}

export default Settings