import {useState} from 'react'
import {Box,DropButton} from 'grommet';
import { Menu } from 'grommet-icons';
const NavMenu = ({children}) => {
    const [open, setOpen] = useState();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Box align="center" pad="small">
    <DropButton
      icon={<Menu/>}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      dropContent={children}
      dropProps={{ top: 'bottom' }}
      dropAlign={{top:"bottom"}}
      a11yTitle="Dropdown for navigation options"
    />
  </Box>
  )
}

export default NavMenu