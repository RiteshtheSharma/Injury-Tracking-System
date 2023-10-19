import {useState,useEffect} from 'react'
import {DateInput,Box,Heading} from "grommet"
import { useResponsiveScreen } from './Context/ResponsiveScreenContext'
const SmallestDateComponent = ({label,setval,val}) => {
 const ResponsiveWidth = useResponsiveScreen();
 const getIpStyle=()=>ResponsiveWidth.windowWidth>500?{width:"initial"}:{width:"20px"};
 const [IpStyle, setIpStyle] = useState(getIpStyle())
useEffect(() => {
  setIpStyle(getIpStyle())

  return () => {
    
  }
}, [ResponsiveWidth.windowWidth])

  return (
    <Box direction='row' justify='between' style={{width:"100%"}}>
<Box  align='left' style={{padding:"2px 0",marginRight:"5px",fontSize:"10px"}} >{label}</Box>
 
      
      
      <input type="date" value={val}
        style={IpStyle}
        onChange={(e) => {setval(e.target.value)}} />
      </Box>
  )
}

export default SmallestDateComponent