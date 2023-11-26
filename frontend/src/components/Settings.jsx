// component description : user can change its profile img , username and password 
import {

    Avatar,
    Stack,
   
  } from "grommet";
  import { useState} from "react";
import { useAuth } from './Context/AuthContext';
import UserPropSetter from './UserPropSetter'
import AuthComp from "./AuthComp";
import ProfileImgEdit from './CropImg/ProfileImgEdit'
const Settings = () => {
    const auth = useAuth();

     const UserPropSetterBundle =  ( <> 
     <UserPropSetter placeholder={"name"} btnLable={"Change name"} value={auth.user.Name} onClick={(val)=>auth.updateUserDetails("Name",val)}/>
     <UserPropSetter  placeholder={"email"} btnLable={"Change email"} value={auth.user.email} onClick={(val)=>auth.updateUserDetails("email",val)}/>
     
     <UserPropSetter  placeholder={"password"} btnLable={"Change pwd"} value={''} onClick={(val)=>auth.updateUserDetails("pwd",val)}/>
     </>);


  return (<>
    <Stack anchor="bottom-right" style={{width:"fit-content",margin:"20px auto",}}>
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