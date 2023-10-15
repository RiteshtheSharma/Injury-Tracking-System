import { Box, Button, Header, } from 'grommet';
import { useNavigate } from "react-router-dom"; 


const NavigationBar = () => {
  const navigate = useNavigate();
  return (

    <Header background="light-2" pad="medium">
    <Box direction="row" align="center" gap="small">
       ITS
    </Box>
    <Box direction="row" align="center" gap="small">
      <Button  label="Login" onClick={()=>{navigate('login')}} />
      <Button  label="Sign In"  onClick={()=>{navigate('signin')}}/>
    </Box>
  </Header>
   
  )
}

export default NavigationBar