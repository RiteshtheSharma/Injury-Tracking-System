import { Box,Button,  Heading,Tip,Table,TableHeader,Skeleton,TableBody,TableRow } from "grommet";
import { Trash } from "grommet-icons";
import { ModLink,ModTableCell,ModLinearSkeleton } from "./StyledComponents";
import { useReportList } from "./Context/ReportListContext";
import { useAuth } from "./Context/AuthContext";

const ReportList = ({ReportData}) => {
  const getProperDateString = (DateString) => {
    const dateVar = new Date(DateString);
    return `${dateVar.getDate()}\/${dateVar.getMonth()}\/${dateVar.getFullYear()}`;
  };
  const getRenderingName = (Name)=> {
    const nameLength = Name?.length 
    let newname ;
    if(nameLength<=15) {newname = Name;
        
      for(let i=0 ;i<15 - nameLength;i++){ newname +=" "; }
    }
   
    else newname = Name?.slice(0,12)+"..." ;
   
    return newname}
  
 
const reportListContextObj = useReportList();
const Auth = useAuth()

  return (
    <Box style={{ width: "100%" }}>
     {ReportData?.length>0 && <> <Heading level={2} style={{ alignSelf: "flex-start", marginBottom: "0" }}>
        List of Reports{" "}
      </Heading>
      <Box>
        <Table style={{fontSize:"12px"}}>
        <TableHeader 
 >
       <ModTableCell scope="col" border="bottom" >Name</ModTableCell>
       <ModTableCell scope="col" border="bottom" >Report date</ModTableCell>
       <ModTableCell scope="col" border="bottom"  >Injury date</ModTableCell>
       <ModTableCell scope="col" border="bottom"  ></ModTableCell>
 </TableHeader>
 <TableBody>
        {ReportData?.map((Report, index) => {
         
  return (
  
    <TableRow 
      key={index}
        
    >
    
     <ModTableCell> <Tip content={<pre style={{backgroundColor:"white",fontFamily:"monospace",fontSize:"12px",width:"fit-content"}}>{getRenderingName(Report.Name)}</pre>}
    plain 
   >
      <ModLink to={`/report/${index}`}><pre >{getRenderingName(Report.Name)}</pre></ModLink>
    </Tip>   </ModTableCell>
      <ModTableCell ><p ><ModLink to={`/report/${index}`}>{getProperDateString(Report.DateofReport)}</ModLink></p></ModTableCell>
      <ModTableCell ><p ><ModLink to={`/report/${index}`}>{getProperDateString(Report.DateofInjury)}</ModLink></p></ModTableCell>
      <ModTableCell style={{alignItems:"end"}} >{(Report.Name === Auth.user.Name) && <Button onClick={()=>reportListContextObj.deleteReportList(index)} size="small" style={{padding:"4px"}} plain={false} icon={<Trash  size="small" />} />}</ModTableCell>
    </TableRow>
  );
})} 
</TableBody> </Table> 
       
      </Box></> }
      {
  !ReportData?.length>0 &&
  <Heading level={2} style={{ alignSelf: "flex-start", marginBottom: "0" }}>
        No report found
      </Heading>


}
    </Box>
  );
};

export default ReportList;
