import { Card, CardHeader, Button,CardBody } from 'grommet';
import { Google } from 'grommet-icons';
const AuthComp = ({type,children}) => {
const handleSignInWithGoogle = ()=>{};

  return (

    <Card  height="medium" width="medium" background="light-1" style={{margin:"auto"}}>
      <CardHeader pad="medium" margin="auto">{type}</CardHeader>
      <CardBody pad="medium">
      <Button
        icon={<Google color='plain'  />}
        label={`${type} with Google`}
        onClick={handleSignInWithGoogle}
        style={{marginBottom:"10px"}}
      />
     {children}
      
      </CardBody>
     
    </Card>
  )
}

export default AuthComp