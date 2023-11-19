import { Link } from "react-router-dom";
import {

    Avatar,
    Heading,
    Stack,
    Box,
   
  } from "grommet";
  import { useState} from "react";
import { useAuth } from './Context/AuthContext';
import { Edit } from "grommet-icons";
import { ModPencilIconLabel } from "./StyledComponents";
import UserPropSetter from './UserPropSetter'
import AuthComp from "./AuthComp";
import ProfileImgEdit from "./ProfileImgEdit";
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
      const borderSmall = { color: 'white', size: 'small' };

     const UserPropSetterBundle =  ( <> 
     <UserPropSetter placeholder={"name"} btnLable={"Change name"} value={auth.user.Name} onClick={(val)=>auth.updateUserDetails("Name",val)}/>
     <UserPropSetter  placeholder={"email"} btnLable={"Change email"} value={auth.user.email} onClick={(val)=>auth.updateUserDetails("email",val)}/>
     
     <UserPropSetter  placeholder={"password"} btnLable={"Change pwd"} value={''} onClick={(val)=>auth.updateUserDetails("pwd",val)}/>
     </>);


  return (<>
    <Stack anchor="bottom-right" style={{width:"fit-content",margin:"20px auto",flex:"auto"}}>
    <Avatar
  size="5xl"
  src={auth?.user?.profileImg}
  border={{ color: "#7D4CDB", size: "small" }}
  style={{minHeight:"192px"}}
/>
<ProfileImgEdit setProfImg={(val)=>auth.updateUserDetails("profileImg",val)} />
    
               </Stack>
  
 <AuthComp
 type={"Set"} >{UserPropSetterBundle}   </AuthComp>
 

 </>
  
  )
}

export default Settings