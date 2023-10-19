import { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Heading,
  Data,
  DataSearch,
  Toolbar,
  List,
  DateInput,
} from "grommet";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import DateFilterComponent from "./DateFilterComponent";
import { useReportFeature } from "./Context/ReportSearchContext";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
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
        border={{ color: "#7D4CDB", size: "small" }}
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
        {userObj.email}{" "}
      </Link>
      <Box direction="row" justify="between" width="large" wrap>
     < DateFilterComponent  label="Report Date filter" Start={{
      setval:ReportFeature.setDateOfReportStartDate,
      val:ReportFeature.DateOfReportStartDate
     }} End={{
      setval:ReportFeature.setDateOfReportEndDate,
      val:ReportFeature.DateOfReportEndDate
     }}/>
     < DateFilterComponent  label="Injury Date filter" Start={{
      setval:ReportFeature.setDateOfInjuryStartDate,
      val:ReportFeature.DateOfInjuryStartDate
     }} End={{
      setval:ReportFeature.setDateOfReportEndDate,
      val:ReportFeature.DateOfReportEndDate
     }}/>
     </Box>
      <Box direction="row" justify="between" style={{marginTop:"80px"}}>
        <Data pad="small" data={[{ name: "Scott" }, { name: "Zelda" }]}>
          <Toolbar>
            <DataSearch
              width={
                responsiveWidth.windowWidth > 900
                  ? "large"
                  : responsiveWidth.windowWidth > 450
                  ? "medium"
                  : "small"
              }
            />
          </Toolbar>

          <List border />
        </Data>
        <Box pad="small">
          <select
            name="sortBy"
            id="sortBy"
            style={{
              padding: "13px 5px",
              backgroundColor: "#F2F2F2",
              border: "0",
            }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {SortByArray.map((item, index) => (
              <option value={item} key={index} style={{ padding: "13px 5px" }}>
                {item}
              </option>
            ))}
          </select>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
