import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Data,
  DataSearch,
  Toolbar,
  Button,
  Meter,
  
} from "grommet";

import { useAuth } from "./Context/AuthContext";
import DateFilterComponent from "./DateFilterComponent";
import { useReportFeature } from "./Context/ReportSearchContext";

import "../ProfileStyle.css";
import ReportList from "./ReportList";
import UserInfo from "./UserInfo";
const Profile = () => {
  const ReportFeature = useReportFeature();
 
 
  const [SortBy, setSortBy] = useState("");
 
  const auth = useAuth(); /* will come in use later */
  const userObj = JSON.parse(auth.user);
  const SortByArray = ["Name", "Date Of Injury", "Date of Reporting"];
  useEffect(() => console.log(SortBy), [SortBy]);

  return (
    <Box align="center" pad="medium">
     <UserInfo  userName={"User name"} profileImg={"https://avatars.githubusercontent.com/u/72566311?v=4"} emailID={userObj.email} />
      <Heading  level={2} style={{alignSelf:"flex-start",marginBottom:"0"}}>Query Reports </Heading>
      <Meter type="bar" value={100} size="full" thickness="xsmall" color="#F2F2F2" style={{padding:"1em 0",flex: "1 0 auto" }}/>
      <Box direction="row"  width="large" style={{ justifyContent: "space-between",width:"100%",flex: "1 0 auto" }}>
        <Box  style={{flex:"1"}}><Data  data={[{ name: "Scott" }, { name: "Zelda" }]}  style={{width:"100%"}}>
          <Toolbar  style={{width:"100%"}}>
            <DataSearch
            
              style={{width:"100%"}}
            />
          </Toolbar>

          {/* <List border /> */}
        </Data></Box>

        <Box  style={{position: "relative"}}>
          <select
            name="sortBy"
            id="sortBy"
            style={{
              padding: "14px 6px 14px 6px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              appearance: "none",
  width: "100%",
  borderRadius: "5px",
  fontSize: "12px",
  color: "#555"
            }}
            onChange={(e) => setSortBy(e.target.value)}
          >
          <option value="" disabled selected>Filter by?</option>
            {SortByArray.map((item, index) => (
              <option value={item} key={index} style={{padding: "13px 5px",fontWeight:"bold" }}>
                {item}
              </option>
            ))}
          </select>
        </Box>
      </Box>

      <Box direction="row"  justify="between" style={{width:"100%",padding:"12px 0",flex: "1 0 auto"}}>
        <DateFilterComponent
          label="Report Date filter"
          Start={{
            setval: ReportFeature.setDateOfReportStartDate,
            val: ReportFeature.DateOfReportStartDate,
          }}
          End={{
            setval: ReportFeature.setDateOfReportEndDate,
            val: ReportFeature.DateOfReportEndDate,
          }}
         
        />
        <DateFilterComponent
          label="Injury Date filter"
          Start={{
            setval: ReportFeature.setDateOfInjuryStartDate,
            val: ReportFeature.DateOfInjuryStartDate,
          }}
          End={{
            setval: ReportFeature.setDateOfInjuryEndDate,
            val: ReportFeature.DateOfInjuryEndDate,
          }}
        />
      </Box>
      <Button primary label="Apply Changes" style={{width:"100%"}}/>
      <ReportList/>
    </Box>
  );
};

export default Profile;
