
import {Box,Button} from 'grommet';
import { useNavigate } from 'react-router-dom';
const NavBtnGrpBeforeAuth = () => {
    const navigate = useNavigate();
  return (
    <Box direction="row" align="center" gap="medium">
    {" "}
    <Button
      label="Login"
      onClick={() => {
        navigate("login");
      }}
    />
    <Button
      label="Sign In"
      onClick={() => {
        navigate("signin");
      }}
    />
    
  </Box>
  )
}

export default NavBtnGrpBeforeAuth