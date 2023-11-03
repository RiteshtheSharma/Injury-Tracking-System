import { Box,Heading ,Button  } from 'grommet'
import BackBodyImg from '../assets/back_body.png'
import FrontBodyImg from "../assets/front_body.png"
import { useResponsiveScreen } from './Context/ResponsiveScreenContext'
import "../NewReport.css"
import BodyInjuryComponent from './BodyInjuryComponent'
import SmallestDateComponent from './SmallestDateComponent'
import { useState } from 'react'
import {useReportList} from './Context/ReportListContext'
const NewReport = () => {

  const ReportListObject = useReportList();
  const updateReportList = ReportListObject.updateReportList;
  const [BackInjuryPoints, setBackInjuryPoints] = useState(
    localStorage.getItem("new_report") === null
      ? {}
      : JSON.parse(localStorage.getItem("new_report"))?.backInjuryPoints
  );
  const syncNewReportToLocalStorage = (property,newValue)=>{
    if(localStorage.getItem('new_report') === null)
       localStorage.setItem('new_report','{}')
    const tempNewReportFromLocalStorage = { ...JSON.parse(localStorage.getItem("new_report")),[property] :newValue };
  
    localStorage.setItem("new_report",JSON.stringify(tempNewReportFromLocalStorage))
  }
  const toggleBackPoints = (gridItemId, label = null, description = null) => {
    const tempBackInjuryPoints = { ...BackInjuryPoints };
   
    if (!isInjuryPointId(gridItemId)) {
      setBackInjuryPoints({
        ...tempBackInjuryPoints,
        [gridItemId]: { label: label, description: description },
      });
     syncNewReportToLocalStorage("backInjuryPoints",{
      ...tempBackInjuryPoints,
      [gridItemId]: { label: label, description: description },
    })
      
    } else {
      const { [gridItemId]: removedProperty, ...newBackInjuryPoints } =
        tempBackInjuryPoints;
   syncNewReportToLocalStorage("backInjuryPoints",newBackInjuryPoints)
      setBackInjuryPoints(newBackInjuryPoints);
    }
  };
  const [FrontInjuryPoints, setFrontInjuryPoints] = useState(
    
      localStorage.getItem("new_report") === null
        ? {}
        : JSON.parse(localStorage.getItem("new_report")).frontInjuryPoints
  
  );
  const toggleFrontPoints = (gridItemId, label = null, description = null) => {
    const tempFrontInjuryPoints = { ...FrontInjuryPoints };
    if (!isInjuryPointId(gridItemId)) {
      setFrontInjuryPoints({
        ...tempFrontInjuryPoints,
        [gridItemId]: { label: label, description: description },
      });
     syncNewReportToLocalStorage("frontInjuryPoints",{
      ...tempFrontInjuryPoints,
      [gridItemId]: { label: label, description: description },
    })
    } else {
      const { [gridItemId]: removedProperty, ...newFrontInjuryPoints } =
        tempFrontInjuryPoints;
       syncNewReportToLocalStorage("frontInjuryPoints",newFrontInjuryPoints)
      setFrontInjuryPoints(newFrontInjuryPoints);
    }
  };

  const isInjuryPointId = (id) => {
    const idBodyTypePart = id.slice(0, 1);
    if (idBodyTypePart === "b") return Object.hasOwn(BackInjuryPoints, id);
    else return Object.hasOwn(FrontInjuryPoints, id);
  };
  const clearALLInjuryPoints = ()=>{
    console.log("called in injuryContext")
    setBackInjuryPoints({});
    setFrontInjuryPoints({});
    localStorage.removeItem('new_report');
    
  }

 
const ResponsiveScreenWindow = useResponsiveScreen();

const  [DateofInjury, setDateofInjury] = useState( localStorage.getItem("new_report") === null
? ""
: JSON.parse(localStorage.getItem("new_report"))?.DateofInjury)
const updateDateOfInjury = (newDate) =>{
setDateofInjury(newDate)
syncNewReportToLocalStorage("DateofInjury",newDate);
}

const handleClearAllPoints = ()=>{
  setDateofInjury('')
  clearALLInjuryPoints();
}
const handleAddToReports =()=>{
  if(DateofInjury.length>0 && (Object.keys(BackInjuryPoints).length>0 || Object.keys(FrontInjuryPoints).length>0) ) {
     // writing the code to save the new report with injury points to server is left
  
  updateReportList(JSON.parse(localStorage.getItem('new_report')))
  handleClearAllPoints()
  }
 else 
 alert("Please Mention date of injury and Mark injury points")
}


  return (
    <Box style={{minHeight:"auto", padding:(ResponsiveScreenWindow.windowWidth>660?"0 50px":"0 20px")}} gap="medium">
   <Heading level={1} align="center" style={{maxWidth:"100vw"}}>Generate new report</Heading>
   <Heading level={3} weight="lighter" align="center" style={{maxWidth:"100vw"}}>Mark the injuries on below body images by clicking the injured areas. If you want to remove any of the marked injury points (red circled marks) just click on that mark, you can clean it by clikcing pelow on "clear all injury points" button .You can submit this new report using "Add report" button.</Heading>
   <SmallestDateComponent label="Date of Injury" labelFontSize={"20px"} dir={"column"} gap={"10px"} inputType={"datetime-local"} setval={ updateDateOfInjury} val={DateofInjury} greaterDateLimit={new Date().toJSON()}/>  
    <Box direction='row' wrap justify="between" style={{marginTop:"auto",rowGap:"10px"}} >

     <BodyInjuryComponent BodySecName={"Back body section"} ImgUrl={BackBodyImg} togglePoints={toggleBackPoints} InjuryPoints={BackInjuryPoints} />
     <BodyInjuryComponent BodySecName={"Front body section"} ImgUrl={FrontBodyImg} togglePoints={toggleFrontPoints} InjuryPoints={FrontInjuryPoints}  />
       
       
    </Box>
<Button primary pad={"medium"} label="Add to Reports"   onClick={handleAddToReports}/>
<Button primary pad={"medium"} label="Clear all injury points" onClick={handleClearAllPoints}/>
    </Box>
  )
}

export default NewReport