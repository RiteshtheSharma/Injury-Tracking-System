import { Box,  Heading,Tip,} from "grommet";


const ReportList = ({ReportData}) => {
  const getProperDateString = (DateString) => {
    const dateVar = new Date(DateString);
    return `${dateVar.getDate()}\/${dateVar.getMonth()}\/${dateVar.getFullYear()}`;
  };


  return (
    <Box style={{ width: "100%" }}>
      <Heading level={2} style={{ alignSelf: "flex-start", marginBottom: "0" }}>
        List of Reports{" "}
      </Heading>
      <Box>
        <ul style={{padding:"0"}}>
        <li style={{ display: "flex", justifyContent: "space-between",padding:"5px 2px",boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
 >
       <Box style={{textAlign:"left",flex:"1",fontSize:"23px",fontFamily:"cursive",fontWeight:"bolder"}}>Name</Box>
       <Box style={{textAlign:"justify",fontSize:"23px",fontFamily:"cursive",fontWeight:"bolder"}}>Report date</Box>
       <Box  style={{flex:"1",textAlign:"right",fontSize:"23px",fontFamily:"cursive",fontWeight:"bolder"}}>Injury date</Box>
 </li>
        {ReportData?.map(({ Name, DateofReport, DateofInjury }, index) => {
  return (
    <li
      key={index}
      style={{ display: "flex", justifyContent: "space-between",padding:"5px 2px",boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
    onClick={()=>{}}
    >
    <Tip content={<span style={{backgroundColor:"white",fontFamily:"monospace",fontSize:"12px",width:"fit-content"}}>{Name}</span>}
    plain 
   >
      <Box style={{textAlign:"left",flex:"1"}}>{Name}</Box>
    </Tip>   
      <Box style={{textAlign:"justify",alignSelf:"center"}}>{getProperDateString(DateofReport)}</Box>
      <Box style={{flex:"1",textAlign:"right",alignSelf:"center"}}>{getProperDateString(DateofInjury)}</Box>
    </li>
  );
})}
        </ul>
        
      </Box>
    </Box>
  );
};

export default ReportList;
