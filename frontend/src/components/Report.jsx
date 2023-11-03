import { useReportList } from "./Context/ReportListContext";
import { Box,Text,Button} from "grommet";
import { Fragment, useState } from "react";
import styled from 'styled-components';
import BackBodyImg from '../assets/back_body.png'
import FrontBodyImg from "../assets/front_body.png"
import BodyInjuryComponent from "./BodyInjuryComponent";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import SmallestDateComponent from "./SmallestDateComponent";
const Report = () => {
    const ResponsiveScreenWindow = useResponsiveScreen();
    const url = window.location.href;
    function convertTo12HourFormat(hr,min) {
        let hours = hr;
        let minutes = min;
        let period = hours >= 12 ? "PM" : "AM";
        
        if (hours === 0) {
          hours = 12; // 0-hour should be converted to 12-hour format
        } else if (hours > 12) {
          hours = hours % 12; // convert hours greater than 12 to 12-hour format
        }
      const to2Digits = (v) =>(v/10 <1 ?"0"+v:v)
        return to2Digits(hours) + ":" + to2Digits(minutes) + " " + period;
      }
    const getProperDateString = (DateString) => {
        const dateVar = new Date(DateString);
        return `${dateVar.getDate()}\/${dateVar.getMonth()}\/${dateVar.getFullYear()} ,${convertTo12HourFormat(dateVar.getHours(),dateVar.getMinutes())}`;
      };
    const index = parseInt((url).slice(url.lastIndexOf("/")+1))
    const report = (useReportList().ReportList)[index] ;
    const isInjuryPointId = (id) => {
        const idBodyTypePart = id.slice(0, 1);
        if (idBodyTypePart === "b") return Object.hasOwn(BackInjuryPoints, id);
        else return Object.hasOwn(FrontInjuryPoints, id);
      };

const [BackInjuryPoints, setBackInjuryPoints] = useState(
    ('backInjuryPoints' in report)?report['backInjuryPoints']:{}
  );
  const toggleBackPoints = (gridItemId, label = null, description = null) => {
    const tempBackInjuryPoints = { ...BackInjuryPoints };
   
    if (!isInjuryPointId(gridItemId)) {
      setBackInjuryPoints({
        ...tempBackInjuryPoints,
        [gridItemId]: { label: label, description: description },
      });
    
      
    } else {
      const { [gridItemId]: removedProperty, ...newBackInjuryPoints } =
        tempBackInjuryPoints;
      setBackInjuryPoints(newBackInjuryPoints);
    }
  };
  const [FrontInjuryPoints, setFrontInjuryPoints] = useState(('frontInjuryPoints' in report) ?report['frontInjuryPoints']:{});
  const toggleFrontPoints = (gridItemId, label = null, description = null) => {
    const tempFrontInjuryPoints = { ...FrontInjuryPoints };
    if (!isInjuryPointId(gridItemId)) {
      setFrontInjuryPoints({
        ...tempFrontInjuryPoints,
        [gridItemId]: { label: label, description: description },
      });
   
    } else {
      const { [gridItemId]: removedProperty, ...newFrontInjuryPoints } =
        tempFrontInjuryPoints;
  
      setFrontInjuryPoints(newFrontInjuryPoints);
    }
  };
const [newDateofInjury, setnewDateofInjury] = useState(report.DateofInjury);
const [BtnState, setBtnState] = useState("change")
  return (
    <Box  pad="large" gap="10px">
    <Box style={{minHeight:"auto",alignText:"left"}}>
        <Text weight="bold" size="xlarge">
          {report.Name}
        </Text>
        <Box direction="row" wrap pad="xxsmall"> <span style={{textDecoration : "underline"}}>Report Date</span> : <span style={{alignItems:"center"}}>{ getProperDateString(report.DateofReport)}</span></Box>
        <Box pad="xxsmall" direction="row" style={{alignItems:"center",flexWrap:"wrap"}}><span style={{textDecoration : "underline"}}>Injury Date</span> : {BtnState==="change"?(<Box direction="row" style={{alignItems:"center"}}><span>{getProperDateString(report.DateofInjury)}</span><Button size="small" pad="xxsmall" style={{marginLeft:"10px"}} label={BtnState} onClick={()=>setBtnState(BtnState==="change"?"update":"change")}/></Box>):<Box direction="row"><SmallestDateComponent label="" labelFontSize={"20px"} gap={"10px"} inputType={"datetime-local"} setval={ setnewDateofInjury} val={newDateofInjury} greaterDateLimit={report.DateofReport}/>  
        <Button size="small" pad="xxsmall" style={{marginLeft:"10px"}} label={BtnState} onClick={()=>setBtnState(BtnState==="change"?"update":"change")}/></Box>
  } </Box>
      </Box>
    

      <Box  gap={'20px'} style={{minHeight:"auto",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
      
        <BodyInjuryComponent BodySecName={"Back body section"} ImgUrl={BackBodyImg} togglePoints={toggleBackPoints} InjuryPoints={BackInjuryPoints} />
 
          <BodyInjuryComponent BodySecName={"Front body section"} ImgUrl={FrontBodyImg} togglePoints={toggleFrontPoints} InjuryPoints={FrontInjuryPoints}  />
  
      </Box>
      
    <Button primary pad={"medium"} label="Update change"   onClick={()=>{}} />

  </Box>
  )
}

export default Report