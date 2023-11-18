import { Box, Button, TextInput } from 'grommet';
import { useState } from 'react';
const UserPropSetter = ({placeholder,value,btnLable,onClick}) => {
  const [val, setval] = useState(value+"");
  console.log(" tyt "+value)
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

export default UserPropSetter