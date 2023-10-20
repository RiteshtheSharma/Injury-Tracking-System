import { Box,  Heading } from "grommet";
import React from "react";

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
        {ReportData?.map(({ Name, DateofReport, DateofInjury }, index) => {
  return (
    <li
      key={index}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span style={{flex:"1",textAlign:"left"}}>{Name}</span>
      <span style={{flex:"1",textAlign:"center"}}>{getProperDateString(DateofReport)}</span>
      <span style={{flex:"1",textAlign:"right"}}>{getProperDateString(DateofInjury)}</span>
    </li>
  );
})}
        </ul>
        
      </Box>
    </Box>
  );
};

export default ReportList;
