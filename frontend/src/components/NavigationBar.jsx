import { Box, Button, Header, } from 'grommet';
import { useNavigate } from "react-router-dom"; 
import { useAuth } from './Context/AuthContext';
import {UserSettings} from 'grommet-icons'
const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  console.log(typeof auth.user ,typeof localStorage.getItem('user'),"auth user")
  return (

    <Header background="light-2" pad="medium">
    <Box direction="row" align="center" gap="small">
       ITS
    </Box>
    
    {!auth.user ? <Box direction="row" align="center" gap="medium"> <Button  label="Login" onClick={()=>{navigate('login')}} />
      <Button  label="Sign In"  onClick={()=>{navigate('signin')}}/></Box>
     
    :<><Box direction="row" align="center" gap="medium"> 
    <Button label="Profile" onClick={()=>{navigate('profile')}} />
    <Button  label="New report" />
    <Button icon={<UserSettings color='plain'  />} label="Settings" onClick={()=>{navigate('settings')}} />
      <Button  label="Log out"  onClick={()=>{navigate('logout')}}/></Box></>} 
    
  </Header>
   
  )
}

export default NavigationBar