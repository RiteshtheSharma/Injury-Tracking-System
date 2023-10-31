import { Box,Heading   } from 'grommet'
import BackBodyImg from '../assets/back_body.png'
import FrontBodyImg from "../assets/front_body.png"
import { useInjuryPoint } from './Context/InjuryContext'
import { useResponsiveScreen } from './Context/ResponsiveScreenContext'
import "../NewReport.css"
import BodyInjuryComponent from './BodyInjuryComponent'
const NewReport = () => {
const InjuryPointObject = useInjuryPoint();
const ResponsiveScreenWindow = useResponsiveScreen();
  return (
    <Box style={{minHeight:"calc( 100vh - 60px )", padding:(ResponsiveScreenWindow.windowWidth>660?"0 50px":"0 20px")}} >
   <Heading level={1} align="center" style={{maxWidth:"100vw"}}>Generate new report</Heading>
   <Heading level={3} weight="lighter" align="center" style={{maxWidth:"100vw"}}>Mark the injuries on below body images by clicking the injured areas</Heading>
    <Box direction='row' wrap justify="between" style={{marginTop:"auto"}}>
     <BodyInjuryComponent BodySecName={"Back body section"} ImgUrl={BackBodyImg} togglePoints={InjuryPointObject.toggleBackPoints} InjuryPoints={InjuryPointObject.BackInjuryPoints} />
     <BodyInjuryComponent BodySecName={"Front body section"} ImgUrl={FrontBodyImg} togglePoints={InjuryPointObject.toggleFrontPoints} InjuryPoints={InjuryPointObject.FrontInjuryPoints}  />
       
       
    </Box>

    </Box>
  )
}

export default NewReport