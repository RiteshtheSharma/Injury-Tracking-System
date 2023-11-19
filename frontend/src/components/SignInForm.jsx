import {TextInput,Button} from 'grommet'
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from './Context/AuthContext';
import { useState } from 'react';
const SignInForm = () => {
  const [username,setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [pwd,setpwd] = useState("");
  const [confirmPwd,setconfirmPwd] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleSubmit = () => {
    if(pwd===confirmPwd){
    auth.signin(username,Email,pwd);
    navigate(redirectPath, { replace: true });}
    else alert("Password must match with confirm password");
  };
  return (
   
    <form onSubmit={handleSubmit} >
    <TextInput type="username" placeholder="User Name" value={username} onChange={(e)=>setusername(e.target.value)}/>
    <TextInput type="email" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
    <TextInput type="password" placeholder="Password" value={pwd} onChange={(e)=>setpwd(e.target.value)}/>
    <TextInput type="password" placeholder="Confirm Password" value={confirmPwd} onChange={(e)=>setconfirmPwd(e.target.value)}/>
    <Button type="submit" label="Sign In" primary style={{borderRadius:"5px", width:"100%"}}/>
  </form>
  )
}

export default SignInForm