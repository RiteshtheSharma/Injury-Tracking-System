// component description : provides a card framework for login, signin and user credential change form 
// with google authentication 
import { Card, CardHeader, Button,CardBody } from 'grommet';
import { Google } from 'grommet-icons';
import { useResponsiveScreen } from './Context/ResponsiveScreenContext';
import PropTypes from "prop-types";
const AuthComp = ({type,children}) => {
const handleSignInWithGoogle = ()=>{
  // will be implemented when frontend integrated with server
};
const responsiveWidth = useResponsiveScreen();
  return (

    <Card  height={((responsiveWidth .windowWidth>450)?"medium":"100%")}  width={((responsiveWidth .windowWidth>450)?"medium":"100%")} background="light-1" style={{maxHeight:"650px",margin:"20px auto",marginBottom:"auto"}}>
      <CardHeader margin="auto"><h1>{type}</h1></CardHeader>
      <CardBody pad="medium"  justify='evenly'>
      <Button
        icon={<Google color='plain'  />}
        label={`${(type==="Set")?"set new email":type} with Google`}
        onClick={handleSignInWithGoogle}
        style={{marginBottom:"30px"}}
      />
     {children}
      
      </CardBody>
     
    </Card>
  )
}
AuthComp.propTypes = {
  type:PropTypes.string.isRequired ,
  children :  PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}
export default AuthComp