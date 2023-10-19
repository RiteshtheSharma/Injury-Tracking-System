import {useState} from 'react'
import {DateInput,Box,Heading} from "grommet"
const SmallestDateComponent = ({label,setval,val}) => {

  return (
    <Box direction='column'>
<Box margin="10px" align='left'>{label}</Box>
    <DateInput
    size="small"
   
        format="mm/dd/yyyy"
        value={val}
        onChange={({ value }) => {setval(value)}}
      /></Box>
  )
}

export default SmallestDateComponent