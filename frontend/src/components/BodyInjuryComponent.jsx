import React from 'react'
import { Box ,Heading} from 'grommet'
import { useResponsiveScreen } from './Context/ResponsiveScreenContext';
import BodyGridItem from './BodyGridItem';
const BodyInjuryComponent = ({BodySecName,ImgUrl,togglePoints,InjuryPoints}) => {
    const ResponsiveScreenWindow = useResponsiveScreen();
    const calcWidth=()=>{
        return ResponsiveScreenWindow.windowWidth>900?Math.round((ResponsiveScreenWindow.windowWidth-150 )/2):(ResponsiveScreenWindow.windowWidth>660?Math.round((ResponsiveScreenWindow.windowWidth-100 )):Math.round((ResponsiveScreenWindow.windowWidth-50 )));
      }
      const calcHeight = ()=>ResponsiveScreenWindow.windowWidth>900?Math.round((ResponsiveScreenWindow.windowWidth-150 )):(ResponsiveScreenWindow.windowWidth>660?2*Math.round((ResponsiveScreenWindow.windowWidth-100 )):2*Math.round((ResponsiveScreenWindow.windowWidth-50 )));
      const idIndicatingPart= BodySecName.slice(0,1).toLowerCase();
      return (
    <Box align="center" elevation="" style={{border:"2px solid #7D4CDB",borderRadius:"20px"}}> 
    <Heading level={4} > {BodySecName}</Heading>
    <Box  className="grid" style={{backgroundImage:`url(${ImgUrl})`,borderRadius:"20px",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:`${calcHeight()}px`,width:`${calcWidth()}px`,alignSelf:"center"}}>
    {[...Array(8192)].map((_,index)=><BodyGridItem key={index} id={`${idIndicatingPart}${index}`} togglePoints={togglePoints}/>)}
  
    </Box>
    {/* display added injury points as table  */}
    </Box>
  )
}

export default BodyInjuryComponent