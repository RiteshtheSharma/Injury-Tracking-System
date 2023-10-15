import { Box, Button, Header, } from 'grommet';
const NavigationBar = () => {
  return (

    <Header background="light-2" pad="medium">
    <Box direction="row" align="center" gap="small">
       ITS
    </Box>
    <Box direction="row" align="center" gap="small">
      <Button label="Login" />
      <Button label="Sign In" />
    </Box>
  </Header>
   
  )
}

export default NavigationBar