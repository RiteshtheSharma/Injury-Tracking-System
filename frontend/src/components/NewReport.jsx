import { Box,Heading   } from 'grommet'
import BackBodyImg from '../assets/back_body.png'
import FrontBodyImg from "../assets/front_body.png"
import {useResponsiveScreen} from './Context/ResponsiveScreenContext'
import "../NewReport.css"
import { useState} from 'react'
const NewReport = () => {
  const ResponsiveScreenWindow = useResponsiveScreen();
  const gridElementClassList = Array.from(Array(8192),()=>'cell');
  const [BackInjuryPoints, setBackInjuryPoints] = useState(gridElementClassList);
  const toggleBackPoints = (event)=>{
  const BackGridElementClassList = [...BackInjuryPoints];
  const index =  parseInt((event.target.id).slice(1));
   BackGridElementClassList[index]=(BackGridElementClassList[index]==="cell")?"cell circle_Dot":"cell";
   setBackInjuryPoints(BackGridElementClassList);
} 
const [FrontInjuryPoints, setFrontInjuryPoints] = useState([...gridElementClassList]);
const toggleFrontPoints = (event)=>{
  const FrontGridElementClassList = [...FrontInjuryPoints];
  const index =  parseInt((event.target.id).slice(1));
   FrontGridElementClassList[index]=(FrontGridElementClassList[index]==="cell")?"cell circle_Dot":"cell";
   setFrontInjuryPoints(FrontGridElementClassList);
}
const calcWidth=()=>{
  return ResponsiveScreenWindow.windowWidth>900?Math.round((ResponsiveScreenWindow.windowWidth-150 )/2):(ResponsiveScreenWindow.windowWidth>660?Math.round((ResponsiveScreenWindow.windowWidth-100 )):Math.round((ResponsiveScreenWindow.windowWidth-50 )));
}
const calcHeight = ()=>ResponsiveScreenWindow.windowWidth>900?Math.round((ResponsiveScreenWindow.windowWidth-150 )):(ResponsiveScreenWindow.windowWidth>660?2*Math.round((ResponsiveScreenWindow.windowWidth-100 )):2*Math.round((ResponsiveScreenWindow.windowWidth-50 )));
  return (
    <Box style={{minHeight:"calc( 100vh - 60px )", padding:(ResponsiveScreenWindow.windowWidth>660?"0 50px":"0 20px")}} >
   <Heading level={1} align="center" style={{maxWidth:"100vw"}}>Generate new report</Heading>
   <Heading level={3} weight="lighter" align="center" style={{maxWidth:"100vw"}}>Mark the injuries on below body images by clicking the injured areas</Heading>
    <Box direction='row' wrap justify="between" style={{marginTop:"auto"}}>
    <Box align="center" elevation="" style={{border:"2px solid #7D4CDB",borderRadius:"20px"}}> 
        <Heading level={4} > Back body section</Heading>
        <Box  className="grid" style={{borderRadius:"20px",backgroundImage:`url(${BackBodyImg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:`${calcHeight()}px`,width:`${calcWidth()}px`,alignSelf:"center"}}>
         {BackInjuryPoints.map((classNames,index)=><span onClick={toggleBackPoints} id={`b${index}`} key={index} className={classNames} ></span>)}
        </Box></Box>
       
        <Box align="center" elevation="" style={{border:"2px solid #7D4CDB",borderRadius:"20px"}}> 
        <Heading level={4} > Front body section</Heading>
        <Box  className="grid" style={{backgroundImage:`url(${FrontBodyImg})`,borderRadius:"20px",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:`${calcHeight()}px`,width:`${calcWidth()}px`,alignSelf:"center"}}>
        {FrontInjuryPoints.map((classNames,index)=><span onClick={toggleFrontPoints } id={`f${index}`} key={index} className={classNames} ></span>)}
      
        </Box>
        
        </Box>
    </Box>

    </Box>
  )
}

export default NewReport