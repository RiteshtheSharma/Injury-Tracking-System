import {useState} from 'react'
import {DateInput,Box,Heading} from "grommet"
import { useResponsiveScreen } from './Context/ResponsiveScreenContext'
const SmallestDateComponent = ({label,setval,val}) => {
 const ResponsiveWidth = useResponsiveScreen();
  return (
    <Box direction='column'>
<Box margin="10px" align='left' >{label}</Box>
    <DateInput
    size={( ResponsiveWidth.windowWidth > 530
                  ? "medium"
                  : "xxlarge")}
   
        format="mm/dd/yyyy"
        value={val}
        onChange={({ value }) => {setval(value)}}
      /></Box>
  )
}

export default SmallestDateComponent