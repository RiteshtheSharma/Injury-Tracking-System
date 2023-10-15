import { Card, CardHeader, Button,CardBody } from 'grommet';
import { Google } from 'grommet-icons';
const AuthComp = ({type,authFormComp,googleAuthFunc}) => {
const handleSignInWithGoogle = ()=>{};

  return (

    <Card  height="medium" width="medium" background="light-1" style={{margin:"60px auto"}}>
      <CardHeader pad="medium" margin="auto">Sign In</CardHeader>
      <CardBody pad="medium">
      <Button
        icon={<Google color='plain'  />}
        label="Sign in with Google"
        onClick={handleSignInWithGoogle}
        style={{marginBottom:"10px"}}
      />
     <authFormComp />
      
      </CardBody>
     
    </Card>
  )
}

export default AuthComp