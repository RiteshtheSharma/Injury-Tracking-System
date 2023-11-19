import { useNavigate } from 'react-router-dom'
import {Card,CardBody,CardHeader,Button,Paragraph, Box} from 'grommet'
import { useAuth } from './Context/AuthContext'
const Logout = () => {
 const navigate = useNavigate();
 const auth = useAuth(); 
  
  return (
<Box  margin="40px auto" style={{flex:"auto"}}>
    <Card  height="medium" width="medium" background="light-1" >
  <CardHeader pad="medium" margin="auto" ><h1>Logout</h1></CardHeader>
  <CardBody pad="medium" style={{display:"flex",justifyContent:"space-around"}}><Paragraph align="center" >Do you want to logout ?</Paragraph>
  
  <Button
   label="Yes"
 
    onClick={()=>{auth.logout()}}
    />
    <Button label="No" primary onClick={()=>{navigate(-1)}}/>
  </CardBody>
 
</Card></Box>
  
  )
}

export default Logout