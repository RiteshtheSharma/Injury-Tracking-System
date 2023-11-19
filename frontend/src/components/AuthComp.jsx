import { Card, CardHeader, Button,CardBody } from 'grommet';
import { Google } from 'grommet-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { useResponsiveScreen } from './Context/ResponsiveScreenContext';
const AuthComp = ({type,children}) => {
const handleSignInWithGoogle = ()=>{};
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

export default AuthComp