import { useState, useEffect, useReducer } from "react";
import {
    Box,
    Heading,
    Data,
    DataSearch,
    Toolbar,
    Button,
    Meter
} from "grommet";
import { useAuth } from "./Context/AuthContext";
import DateFilterComponent from "./DateFilterComponent";
import { useReportByDateFeature } from "./Context/ReportSearchByDateContext";
import { isValidDate } from "../NonReactCompFunc";
import "../ProfileStyle.css";
import ReportList from "./ReportList";
import UserInfo from "./UserInfo";
import { useReportList } from "./Context/ReportListContext";
import { ModSelect } from "./StyledComponents";
const Profile = () => {
    const ReportFeature = useReportByDateFeature();
    const [SortBy, setSortBy] = useState("");
    const [searchName, setsearchName] = useState("");
    const auth = useAuth(); /* will come in use later */
    const ReportListContextObject = useReportList();

    const { email, Name, profileImg } = auth.user;
    const ReportListReducer = (Reports, action) => {
        switch (action.type) {
            case "reinitialize":
                return [...action.newReport];
            case "search":
                return [
                    ...Reports.filter(
                        (report) =>
                            report["Name"]
                                .toLowerCase()
                                .indexOf(action?.searchName.toLowerCase()) > -1
                    )
                ];

            case "sort":
                return Reports.sort((Report1, Report2) => {
                    let [propertyval1, propertyval2] =
                        action.sortProperty === "Name"
                            ? [
                                  Report1[action.sortProperty],
                                  Report2[action.sortProperty]
                              ]
                            : [
                                  new Date(Report1[action.sortProperty]),
                                  new Date(Report2[action.sortProperty])
                              ];
                    return propertyval1 > propertyval2
                        ? 1
                        : propertyval1 === propertyval2
                          ? 0
                          : -1;
                });
            case "filter":
                return Reports.filter((report) =>
                    action.operator === "gte"
                        ? new Date(report[action.FilterProperty]) >=
                          new Date(action.FilterPropertyCompValue)
                        : new Date(report[action.FilterProperty]) <=
                          new Date(action.FilterPropertyCompValue)
                );
        }
    };
    const [ReportListstate, ReportListdispatch] = useReducer(
        ReportListReducer,
        ReportListContextObject.ReportList
    );

    const SortByArray = ["Name", "DateofReport", "DateofInjury"];
    // useEffect(() => console.log(SortBy), [SortBy]);
    // useEffect(()=>  console.log(email,pwd, "in profile",typeof(userObj)),[])

    const onApplyChangesBtnClick = () => {
        ReportListdispatch({
            type: "reinitialize",
            newReport: ReportListContextObject.ReportList
        });
        ReportListdispatch({ type: "search", searchName: searchName });
        if (SortBy.length > 0)
            ReportListdispatch({ type: "sort", sortProperty: SortBy });
        if (isValidDate(ReportFeature.DateOfInjuryStartDate))
            ReportListdispatch({
                type: "filter",
                FilterProperty: "DateofInjury",
                operator: "gte",
                FilterPropertyCompValue: ReportFeature.DateOfInjuryStartDate
            });
        if (isValidDate(ReportFeature.DateOfInjuryEndDate))
            ReportListdispatch({
                type: "filter",
                FilterProperty: "DateofInjury",
                operator: "lte",
                FilterPropertyCompValue: ReportFeature.DateOfInjuryEndDate
            });
        if (isValidDate(ReportFeature.DateOfReportStartDate))
            ReportListdispatch({
                type: "filter",
                FilterProperty: "DateofReport",
                operator: "gte",
                FilterPropertyCompValue: ReportFeature.DateOfReportStartDate
            });
        if (isValidDate(ReportFeature.DateOfReportEndDate))
            ReportListdispatch({
                type: "filter",
                FilterProperty: "DateofReport",
                operator: "lte",
                FilterPropertyCompValue: ReportFeature.DateOfReportEndDate
            });
    };
    useEffect(() => {
        ReportListdispatch({
            type: "reinitialize",
            newReport: ReportListContextObject.initializeReportList()
        });
    }, []);

    return (
        <Box
            align="center"
            pad="medium"
            style={{ flex: "auto", height: "fit-content", minHeight: "unset" }}
        >
            <UserInfo userName={Name} profileImg={profileImg} emailID={email} />
            <Heading
                level={2}
                style={{ alignSelf: "flex-start", marginBottom: "0" }}
            >
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
                    flex: "1 0 auto"
                }}
            >
                <Box style={{ flex: "1" }}>
                    <Data
                        // data={[{ name: "Scott" }, { name: "Zelda" }]}
                        style={{ width: "100%" }}
                    >
                        <Toolbar style={{ width: "100%" }}>
                            <DataSearch
                                style={{ width: "100%" }}
                                value={searchName}
                                onChange={(e) => setsearchName(e.target.value)}
                            />
                        </Toolbar>

                        {/* <List border style={{boxSizing:"content-box",paddingRight:"12px"}} /> */}
                    </Data>
                </Box>

                <Box style={{ position: "relative" }}>
                    <ModSelect
                        name="sortBy"
                        id="sortBy"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="" disabled selected>
                            Sort by?
                        </option>
                        {SortByArray.map((item, index) => (
                            <option
                                className="selectable"
                                value={item}
                                key={index}
                            >
                                {item}
                            </option>
                        ))}
                    </ModSelect>
                </Box>
            </Box>

            <Box
                direction="row"
                justify="between"
                style={{ width: "100%", padding: "12px 0", flex: "1 0 auto" }}
            >
                <DateFilterComponent
                    label="Report Date filter"
                    Start={{ // object with usestate variable and setstate function for setting report date 's lower limit 

                        setval: ReportFeature.setDateOfReportStartDate,
                        val: ReportFeature.DateOfReportStartDate
                    }}
                    End={{ // object with usestate variable and setstate function for setting report date 's upper limit 
                        setval: ReportFeature.setDateOfReportEndDate,
                        val: ReportFeature.DateOfReportEndDate
                    }}
                />
                <DateFilterComponent
                    label="Injury Date filter"
                    Start={{ // object with usestate variable and setstate function for setting date of injury 's lower limit 
                        setval: ReportFeature.setDateOfInjuryStartDate,
                        val: ReportFeature.DateOfInjuryStartDate
                    }}
                    End={{// object with usestate variable and setstate function for setting date of injury 's upper limit 
                        setval: ReportFeature.setDateOfInjuryEndDate,
                        val: ReportFeature.DateOfInjuryEndDate
                    }}
                />
            </Box>
            <Button
                primary
                label="Apply Changes"
                style={{ width: "100%" }}
                onClick={(e) => {
                    onApplyChangesBtnClick();
                }}
            />
            <ReportList ReportData={ReportListstate} />
        </Box>
    );
};

export default Profile;
