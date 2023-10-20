import { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Heading,
  Data,
  DataSearch,
  Toolbar,
  Button,
  Meter,
  
} from "grommet";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import DateFilterComponent from "./DateFilterComponent";
import { useReportFeature } from "./Context/ReportSearchContext";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import "../ProfileStyle.css";
import ReportList from "./ReportList";
const Profile = () => {
  const ReportFeature = useReportFeature();
  const responsiveWidth = useResponsiveScreen();
  const [linkStyle, setlinkStyle] = useState({
    textDecoration: "none",
    color: "#1F2328",
  });
  const [SortBy, setSortBy] = useState("");
  const onMouseOver = () => {
    setlinkStyle({ textDecoration: "underline", color: "#0074CC" });
  };
  const onMouseOut = () => {
    setlinkStyle({ textDecoration: "none", color: "#1F2328" });
  };
  const auth = useAuth();
  const userObj = JSON.parse(auth.user);
  const SortByArray = ["Name", "Date Of Injury", "Date of Reporting"];
  useEffect(() => console.log(SortBy), [SortBy]);

  return (
    <Box align="center" pad="medium">
      <Avatar
        size="5xl"
        src="https://avatars.githubusercontent.com/u/72566311?v=4"
        border={{ color: "#7D4CDB", size: "small" ,flex: "1 0 auto"}}
      />
      {/* will be replaced by userObj.name */}
      <Heading level={1} margin="none" style={{ fontFamily: "sans-serif" }}>
        {"User name"}
      </Heading>
      <Link
        to={`mailto:${userObj.email}`}
        style={linkStyle}
        onMouseOver={() => onMouseOver()}
        onMouseOut={() => onMouseOut()}
      >
        {userObj.email}
      </Link>
      <Heading  level={2} style={{alignSelf:"flex-start",marginBottom:"0"}}>Query Reports </Heading>
      <Meter type="bar" value={100} size="full" thickness="xsmall" color="#F2F2F2" style={{padding:"1em 0"}}/>
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
