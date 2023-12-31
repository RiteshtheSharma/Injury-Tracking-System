// gives detailed information about a report from report list from ReportList context usestate
import { useReportList } from "./Context/ReportListContext";
import { Box, Button } from "grommet";
import { useState } from "react";
import BackBodyImg from "../assets/back_body.png";
import FrontBodyImg from "../assets/front_body.png";
import BodySideInjuryMapping from "./BodySideInjuryMapping";
import SmallestDateComponent from "./SmallestDateComponent";
import UserInfo from "./UserInfo";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
const Report = () => {
    const ReportListContextObj = useReportList();

    function convertTo12HourFormat(hr, min) {
        let hours = hr;
        let minutes = min;
        let period = hours >= 12 ? "PM" : "AM";

        if (hours === 0) {
            hours = 12; // 0-hour should be converted to 12-hour format
        } else if (hours > 12) {
            hours = hours % 12; // convert hours greater than 12 to 12-hour format
        }
        const to2Digits = (v) => (v / 10 < 1 ? "0" + v : v);
        return to2Digits(hours) + ":" + to2Digits(minutes) + " " + period;
    }
    const getProperDateString = (DateString) => {
        const dateVar = new Date(DateString);
        return `${dateVar.getDate()}\/${dateVar.getMonth()}\/${dateVar.getFullYear()} ,${convertTo12HourFormat(
            dateVar.getHours(),
            dateVar.getMinutes()
        )}`;
    };
    const url = window.location.href;

    const index = parseInt(url.slice(url.lastIndexOf("/") + 1)); // the last part of the URL path is index to the required report to be displayed in ReportList context 's ReportList useStste
    const report = ReportListContextObj.ReportList[index];
    
    // verify if grid item of html element with body section image as background image is injury point using its id 
    const isInjuryPointId = (id) => {
        const idBodyTypePart = id.slice(0, 1);
        if (idBodyTypePart === "b") return Object.hasOwn(BackInjuryPoints, id);
        else return Object.hasOwn(FrontInjuryPoints, id);
    };
    // manages the grid items of html element with back body section image as its background image and facilitate updation of backInjuryPoints object of given report in ReportList context 's ReportList useStste
    const [BackInjuryPoints, setBackInjuryPoints] = useState(
        typeof report === typeof {} && "backInjuryPoints" in report
            ? report["backInjuryPoints"]
            : {}
    );
    // remove or add grid item as back  injury point
    const toggleBackPoints = (gridItemId, label = null, description = null) => {
        const tempBackInjuryPoints = { ...BackInjuryPoints };

        if (!isInjuryPointId(gridItemId)) {
            setBackInjuryPoints({
                ...tempBackInjuryPoints,
                [gridItemId]: { label: label, description: description }
            });
        } else {
            const { [gridItemId]: removedProperty, ...newBackInjuryPoints } =
                tempBackInjuryPoints;
            setBackInjuryPoints(newBackInjuryPoints);
        }
    };
    // manages the grid items of html element with front body section image as its background image and facilitate updation of frontInjuryPoints object of given report in ReportList context's ReportList useStste
    const [FrontInjuryPoints, setFrontInjuryPoints] = useState(
        typeof report === typeof {} && "frontInjuryPoints" in report
            ? report["frontInjuryPoints"]
            : {}
    );
    // remove or add grid item as front injury point
    const toggleFrontPoints = (
        gridItemId,
        label = null,
        description = null
    ) => {
        const tempFrontInjuryPoints = { ...FrontInjuryPoints };
        if (!isInjuryPointId(gridItemId)) {
            setFrontInjuryPoints({
                ...tempFrontInjuryPoints,
                [gridItemId]: { label: label, description: description }
            });
        } else {
            const { [gridItemId]: removedProperty, ...newFrontInjuryPoints } =
                tempFrontInjuryPoints;

            setFrontInjuryPoints(newFrontInjuryPoints);
        }
    };
    // for updating the DateofInjury of present report
    const [newDateofInjury, setnewDateofInjury] = useState(
        report?.DateofInjury
    );
    // enable or disable the change of DateofInjury of present report
    const [BtnState, setBtnState] = useState("change");
    
    const handleOnClickUpdateChange = () => {
        ReportListContextObj.updateReportList(
            {
                frontInjuryPoints: FrontInjuryPoints,
                backInjuryPoints: BackInjuryPoints,
                DateofInjury: newDateofInjury,
                DateofReport: report.DateofReport,
                Name: report.Name
            },
            index
        );
    };

    const navigate = useNavigate();

    const handleOnClickDeleteReport = () => {
        ReportListContextObj.deleteReportList(index);
        navigate("/profile");
    };
    const auth = useAuth();
    return (
        <Box
            pad="large"
            gap="10px"
            style={{ flex: "auto", minHeight: "unset", height: "fit-content" }}
        >
            <Box style={{ minHeight: "auto", alignText: "left" }}>
                <Box style={{ padding: "10px 0" }}>
                    <UserInfo
                        userName={auth.user.Name}
                        profileImg={
                            "https://avatars.githubusercontent.com/u/72566311?v=4"
                        }
                        emailID={auth.user.email}
                    />
                </Box>

                <Box direction="row" wrap pad="xxsmall">
                    {" "}
                    <span style={{ textDecoration: "underline" }}>
                        Report Date
                    </span>{" "}
                    :{" "}
                    <span style={{ alignItems: "center" }}>
                        {getProperDateString(report?.DateofReport)}
                    </span>
                </Box>
                <Box
                    pad="xxsmall"
                    direction="row"
                    style={{ alignItems: "center", flexWrap: "wrap" }}
                >
                    <span style={{ textDecoration: "underline" }}>
                        Injury Date
                    </span>{" "}
                    :{" "}
                    {BtnState === "change"  ? (<>
                        
                        <Box direction="row" style={{ alignItems: "center" }}>
                            <span>{getProperDateString(newDateofInjury)}</span>
                            {auth.user.Name === report?.Name && ( 
                                <>
                               
                                <Button
                                    size="small"
                                    pad="xxsmall"
                                    style={{ marginLeft: "10px" }}
                                    label={BtnState}
                                    onClick={() =>
                                        setBtnState(
                                            BtnState === "change"
                                                ? "update"
                                                : "change"
                                        )
                                    }
                                />
                                </>
                            )}
                        </Box></>
                    ) : (
                        <Box direction="row">
                            <SmallestDateComponent
                                label=""
                                labelFontSize={"20px"}
                                gap={"10px"}
                                inputType={"datetime-local"}
                                setval={setnewDateofInjury}
                                val={newDateofInjury}
                                greaterDateLimit={report?.DateofReport}
                            />
                             {/* injury Date is only changable if the report is of loggedin user will be replace by ids comparison in future */}
                           { auth.user.Name === report?.Name && <Button
                                size="small"
                                pad="xxsmall"
                                style={{ marginLeft: "10px" }}
                                label={BtnState}
                                onClick={() =>
                                    setBtnState(
                                        BtnState === "change"
                                            ? "update"
                                            : "change"
                                    )
                                }
                            /> }
                        </Box>
                    )}{" "}
                </Box>
            </Box>

            <Box
                gap={"20px"}
                style={{
                    minHeight: "auto",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}
            >
                <BodySideInjuryMapping
                    BodySecName={"Back body section"}
                    ImgUrl={BackBodyImg}
                    togglePoints={toggleBackPoints}
                    InjuryPoints={BackInjuryPoints}
                />

                <BodySideInjuryMapping
                    BodySecName={"Front body section"}
                    ImgUrl={FrontBodyImg}
                    togglePoints={toggleFrontPoints}
                    InjuryPoints={FrontInjuryPoints}
                />
            </Box>
            {/* will replace by ids comparison in future */}
            {auth.user.Name === report?.Name && (
                <Box gap="small">
                    <Button
                        primary
                        pad={"medium"}
                        label="Update change"
                        onClick={handleOnClickUpdateChange}
                    />
                    <Button
                        primary
                        pad={"medium"}
                        label="Delete"
                        onClick={handleOnClickDeleteReport}
                    />
                </Box>
            )}
        </Box>
    );
};

export default Report;
