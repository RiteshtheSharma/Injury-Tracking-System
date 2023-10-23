import { Box,Heading   } from 'grommet'
import BackBodyImg from '../assets/back_body.png'
import FrontBodyImg from "../assets/front_body.png"
import {useResponsiveScreen} from './Context/ResponsiveScreenContext'
import "../NewReport.css"
import { useState } from 'react'
const NewReport = () => {
  const ResponsiveScreenWindow = useResponsiveScreen();
  const [InjuryPoints, setInjuryPoints] = useState([]);
  const addPoints = (event)=>{
    const rect = event.target.getBoundingClientRect();
    let x = event.clientX - rect.left; //x position within the element.
let y = event.clientY - rect.top;  //y position within the element.
let width = rect.right - rect.left;// width of element
let height = rect.bottom - rect.top;// height of element
let xp =((x*100)/width) ; // x position as % of element 's width from left most edge of element
let yp = ((y*100)/height);// y position as % of element 's height from top most edge of element
setInjuryPoints([{left:`${xp}%`,top:`${yp}%`},...InjuryPoints])
}
  return (
    <Box style={{minHeight:"calc( 100vh - 60px )"}}>
   <Heading level={1} align="center" style={{maxWidth:"100vw"}}>Generate new report</Heading>
   <Heading level={3} weight="lighter" align="center" style={{maxWidth:"100vw"}}>Mark the injuries on below body images by clicking the injured areas</Heading>
    <Box direction='row' wrap justify="between" style={{marginTop:"auto"}}>
    <Box align="center" elevation="" style={{border:"2px solid #7D4CDB",borderRadius:"20px"}}> 
        <Heading level={4} > Back body section</Heading>
        <Box onClick={(event)=>{ addPoints(event)}}  style={{backgroundImage:`url(${BackBodyImg})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:`${(ResponsiveScreenWindow.windowWidth*313)/350 - 48}px`,width:`${(ResponsiveScreenWindow.windowWidth)/2 -50}px`}}>
         {InjuryPoints.map(({top,left},index)=><span key={index} className='circle_Dot' style={{top:top,left:left}}></span>)}
        </Box></Box>
       
        <Box align="center" elevation="" style={{border:"2px solid #7D4CDB",borderRadius:"20px"}}> 
        <Heading level={4} > Front body section</Heading>
        <Box  style={{backgroundImage:`url(${FrontBodyImg})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:`${(ResponsiveScreenWindow.windowWidth*313)/350 - 48}px`,width:`${(ResponsiveScreenWindow.windowWidth)/2 -50}px`}}>
       
        </Box>
        
        </Box>
    </Box>

    </Box>
  )
}

export default NewReport