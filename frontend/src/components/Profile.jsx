import { useState, useEffect, useReducer } from "react";
import {
  Box,
  Heading,
  Data,
  DataSearch,
  Toolbar,
  Button,
  Meter,
  List
} from "grommet";
import { SampleReportData } from "./SampleData";
import { useAuth } from "./Context/AuthContext";
import DateFilterComponent from "./DateFilterComponent";
import { useReportFeature } from "./Context/ReportSearchContext";
import { isValidDate } from "../NonReactCompFunc";
import "../ProfileStyle.css";
import ReportList from "./ReportList";
import UserInfo from "./UserInfo";
const Profile = () => {
  const ReportFeature = useReportFeature();
  const [SortBy, setSortBy] = useState("");
  const [searchName, setsearchName] = useState("")
  const auth = useAuth();/* will come in use later */
  const userObj = JSON.parse(auth?.user);
  const ReportListReducer = (Reports, action) => {
    switch (action.type) {
      case "search":
        return [
          ...Reports.filter((report) => report["Name"].toLowerCase().indexOf(action.searchName.toLowerCase())),
        ];

      case "sort":
        return Reports.sort((Report1, Report2) => {
          let [propertyval1, propertyval2] =
            action.sortProperty === "Name"
              ? [Report1[action.sortProperty], Report2[action.sortProperty]]
              : [
                  new Date(Report1[action.sortProperty]),
                  new Date(Report2[action.sortProperty]),
                ];
          return propertyval1 > propertyval2
            ? 1
            : propertyval1 === propertyval2
            ? 0
            : -1;
        });
        case "filter":
          return Reports.filter(report=>{
            if(action.operator ==="gte")
          return  report[action.FilterProperty] >= action.FilterPropertyCompValue;
        else return report[action.FilterProperty] <= action.FilterPropertyCompValue
             })
    }
  };
  const [ReportListstate, ReportListdispatch] = useReducer(
    ReportListReducer,
    SampleReportData
  );

  console.log(auth.user, "in profile");

  const SortByArray = ["Name", "DateofReport", "DateofInjury"];
  useEffect(() => console.log(SortBy), [SortBy]);
const onApplyChangesBtnClick =()=>{
  ReportListdispatch({type:"search",searchName:searchName})
  if(SortBy.length>0)
  ReportListdispatch({type:"sort",sortProperty:SortBy})
  if(isValidDate(ReportFeature.DateOfReportStartDate))
}
  return (
    <Box align="center" pad="medium">
      <UserInfo
        userName={"User name"}
        profileImg={"https://avatars.githubusercontent.com/u/72566311?v=4"}
        emailID={userObj.email}
      />
      <Heading level={2} style={{ alignSelf: "flex-start", marginBottom: "0" }}>
        Query Reports{" "}
      </Heading>
      <Meter
        type="bar"
        value={100}
        size="full"
        thickness="xsmall"
        color="#F2F2F2"
        style={{ padding: "1em 0", flex: "1 0 auto" }}
      />
      <Box
        direction="row"
        width="large"
        style={{
          justifyContent: "space-between",
          width: "100%",
          flex: "1 0 auto",
        }}
      >
        <Box style={{ flex: "1" }}>
          <Data
            data={[{ name: "Scott" }, { name: "Zelda" }]}
            style={{ width: "100%" }}
          >
            <Toolbar style={{ width: "100%" }}>
              <DataSearch style={{ width: "100%" }} value={searchName} onChange={(e)=>setsearchName(e.target.value)}/>
            </Toolbar>

            {/* <List border style={{boxSizing:"content-box",paddingRight:"12px"}} /> */}
          </Data>
        </Box>

        <Box style={{ position: "relative" }}>
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
              color: "#555",
            }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="" disabled selected>
              Sort by?
            </option>
            {SortByArray.map((item, index) => (
              <option
                value={item}
                key={index}
                style={{ padding: "13px 5px", fontWeight: "bold" }}
              >
                {item}
              </option>
            ))}
          </select>
        </Box>
      </Box>

      <Box
        direction="row"
        justify="between"
        style={{ width: "100%", padding: "12px 0", flex: "1 0 auto" }}
      >
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
      <Button primary label="Apply Changes" style={{ width: "100%" }} onClick={(e)=>{onApplyChangesBtnClick()}}/>
      <ReportList ReportData={SampleReportData} />
    </Box>
  );
};

export default Profile;
