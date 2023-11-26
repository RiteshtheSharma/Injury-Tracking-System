// component desc : used for individual user property eg name, email or pwd with a input text for new value and btn to set new value


import { Box, Button, TextInput } from 'grommet';
import { useState } from 'react';
import PropTypes from "prop-types";
const UserPropSetter = ({placeholder,value,btnLable,onClick}) => {
  const [val, setval] = useState(value+"");

    return (
        <Box direction="row" align="center" background="light-2" pad="small" round="medium">
        
          <TextInput
            placeholder={"new "+placeholder}
            value={val}
            onChange={(e)=>setval(e.target.value)}
            style={{borderRadius:"18px 0 0 18px"}}
          />
            <Button label={btnLable} primary   margin={{ left: 'small' }} style={{borderRadius:"0 18px 18px 0"}} onClick={()=>onClick(val)} />
        </Box>
      );
}
UserPropSetter.propTypes ={
  placeholder : PropTypes.string.isRequired ,
  value : PropTypes.string.isRequired ,
  btnLable : PropTypes.string.isRequired ,
  onClick : PropTypes.func.isRequired
}

export default UserPropSetter