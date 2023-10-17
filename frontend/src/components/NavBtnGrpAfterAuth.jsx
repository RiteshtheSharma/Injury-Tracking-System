import {Box,Button} from 'grommet';
import { useNavigate } from 'react-router-dom';
import { UserSettings } from "grommet-icons";

const NavBtnGrpAfterAuth = () => {
    const navigate = useNavigate();
  return (
    <Box direction="row" align="center" gap="medium">
    <Button
      label="Profile"
      onClick={() => {
        navigate("profile");
      }}
    />
    <Button label="New report" />
    <Button
      icon={<UserSettings color="plain" />}
      label="Settings"
      onClick={() => {
        navigate("settings");
      }}
    />
    <Button
      label="Log out"
      onClick={() => {
        navigate("logout");
      }}
    />
  </Box>
  )
}

export default NavBtnGrpAfterAuth