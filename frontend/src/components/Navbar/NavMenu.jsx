// part of navigation bar which appears only for mobile screen in form of hamburger bar at right side of navigation bar replacing navigation buttons
// when it is clicked then menu appears for different navigation links  
import {useState} from 'react'
import {Box,DropButton} from 'grommet';
import { Menu } from 'grommet-icons';
import PropTypes from 'prop-types'
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
NavMenu.PropTypes = {
  children : PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}
export default NavMenu