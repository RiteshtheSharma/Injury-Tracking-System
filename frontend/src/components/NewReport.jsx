import { Box,Heading ,Button  } from 'grommet'
import BackBodyImg from '../assets/back_body.png'
import FrontBodyImg from "../assets/front_body.png"
import { useInjuryPoint } from './Context/InjuryContext'
import { useResponsiveScreen } from './Context/ResponsiveScreenContext'
import "../NewReport.css"
import BodyInjuryComponent from './BodyInjuryComponent'
const NewReport = () => {
const InjuryPointObject = useInjuryPoint();
const ResponsiveScreenWindow = useResponsiveScreen();
const handleAddToReports =()=>{
  // writing the code to save the new report with injury points to server is left
  InjuryPointObject.clearALLInjuryPoints();}
const handleClearAllPoints = ()=>{
  InjuryPointObject.clearALLInjuryPoints();
}
  return (
    <Box style={{minHeight:"auto", padding:(ResponsiveScreenWindow.windowWidth>660?"0 50px":"0 20px")}} gap="medium">
   <Heading level={1} align="center" style={{maxWidth:"100vw"}}>Generate new report</Heading>
   <Heading level={3} weight="lighter" align="center" style={{maxWidth:"100vw"}}>Mark the injuries on below body images by clicking the injured areas</Heading>
    <Box direction='row' wrap justify="between" style={{marginTop:"auto",rowGap:"10px"}} >
     <BodyInjuryComponent BodySecName={"Back body section"} ImgUrl={BackBodyImg} togglePoints={InjuryPointObject.toggleBackPoints} InjuryPoints={InjuryPointObject.BackInjuryPoints} />
     <BodyInjuryComponent BodySecName={"Front body section"} ImgUrl={FrontBodyImg} togglePoints={InjuryPointObject.toggleFrontPoints} InjuryPoints={InjuryPointObject.FrontInjuryPoints}  />
       
       
    </Box>
<Button primary pad={"medium"} label="Add to Reports"   onClick={handleAddToReports}/>
<Button primary pad={"medium"} label="Clear all injury points" onClick={handleClearAllPoints}/>
    </Box>
  )
}

export default NewReport