import React from 'react'
import { Box ,Heading} from 'grommet'
import { useResponsiveScreen } from './Context/ResponsiveScreenContext';
const BodyInjuryComponent = ({BodySecName,ImgUrl,InjuryPointsArr,togglePoints}) => {
    const ResponsiveScreenWindow = useResponsiveScreen();
    const calcWidth=()=>{
        return ResponsiveScreenWindow.windowWidth>900?Math.round((ResponsiveScreenWindow.windowWidth-150 )/2):(ResponsiveScreenWindow.windowWidth>660?Math.round((ResponsiveScreenWindow.windowWidth-100 )):Math.round((ResponsiveScreenWindow.windowWidth-50 )));
      }
      const calcHeight = ()=>ResponsiveScreenWindow.windowWidth>900?Math.round((ResponsiveScreenWindow.windowWidth-150 )):(ResponsiveScreenWindow.windowWidth>660?2*Math.round((ResponsiveScreenWindow.windowWidth-100 )):2*Math.round((ResponsiveScreenWindow.windowWidth-50 )));
  return (
    <Box align="center" elevation="" style={{border:"2px solid #7D4CDB",borderRadius:"20px"}}> 
    <Heading level={4} > {BodySecName}</Heading>
    <Box  className="grid" style={{backgroundImage:`url(${ImgUrl})`,borderRadius:"20px",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:`${calcHeight()}px`,width:`${calcWidth()}px`,alignSelf:"center"}}>
    {InjuryPointsArr.map((classNames,index)=><span onClick={togglePoints } id={`f${index}`} key={index} className={classNames} ></span>)}
  
    </Box>
    
    </Box>
  )
}

export default BodyInjuryComponent