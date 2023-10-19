import { Box,  Heading } from "grommet";
import React from "react";
import { SampleReportData } from "./SampleData";
const ReportList = () => {
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
        <ul>
        {SampleReportData.map(({ Name, DateofReport, DateofInjury }, index) => {
  return (
    <li
      key={index}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span>{Name}</span>
      <span>{getProperDateString(DateofReport)}</span>
      <span>{getProperDateString(DateofInjury)}</span>
    </li>
  );
})}
        </ul>
        
      </Box>
    </Box>
  );
};

export default ReportList;
