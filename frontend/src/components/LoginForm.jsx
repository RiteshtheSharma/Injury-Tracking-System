import {TextInput,Button} from 'grommet';
import { useState } from 'react';
import { useAuth } from './Context/AuthContext';
import { useNavigate, useLocation } from "react-router-dom";
const LogInForm = () => {
   
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleSubmit=()=>{
    auth.login(email,pwd);
    navigate(redirectPath, { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
    <TextInput type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <TextInput type="password" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
    <Button type="submit" label="Login In" primary style={{borderRadius:"5px", width:"100%"}}/>
  </form>
  )
}

export default LogInForm