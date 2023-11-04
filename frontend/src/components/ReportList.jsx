import { Box,Button,  Heading,Tip,Table,TableHeader,TableCell,TableBody,TableRow } from "grommet";
import { useNavigate } from "react-router-dom";
import { Trash } from "grommet-icons";
import styled from "styled-components";
const ReportList = ({ReportData}) => {
  const getProperDateString = (DateString) => {
    const dateVar = new Date(DateString);
    return `${dateVar.getDate()}\/${dateVar.getMonth()}\/${dateVar.getFullYear()}`;
  };
  const getRenderingName = (Name)=> {
    const nameLength = Name.length 
    let newname ;
    if(nameLength<=15) {newname = Name;
        
      for(let i=0 ;i<15 - nameLength;i++){ newname +=" "; }
    }
   
    else newname = Name.slice(0,15) ;
    console.log(nameLength,newname.length,newname,Name);
    return newname}
  
  const Navigate = useNavigate();
  const ModTableCell = styled(TableCell)`
  {
    padding:0;
  }
  
  `

  return (
    <Box style={{ width: "100%" }}>
      <Heading level={2} style={{ alignSelf: "flex-start", marginBottom: "0" }}>
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
         onClick={()=>{Navigate(`/report/${index}`)}}
    >
    
     <ModTableCell> <Tip content={<pre style={{backgroundColor:"white",fontFamily:"monospace",fontSize:"12px",width:"fit-content"}}>{getRenderingName(Report.Name)}</pre>}
    plain 
   >
      <pre >{getRenderingName(Report.Name)}</pre>
    </Tip>   </ModTableCell>
      <ModTableCell ><p >{getProperDateString(Report.DateofReport)}</p></ModTableCell>
      <ModTableCell ><p >{getProperDateString(Report.DateofInjury)}</p></ModTableCell>
      <ModTableCell style={{alignItems:"end"}} ><Button  size="small"  plain={false} icon={<Trash  size="small" />} /></ModTableCell>
    </TableRow>
  );
})}
</TableBody> </Table>
        
      </Box>
    </Box>
  );
};

export default ReportList;
