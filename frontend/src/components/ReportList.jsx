// render the list of report in form of table with username , date of report and date of injury as table header
import { Box, Heading, TableHeader } from "grommet";

import { ModTableCell, TableBodyWithScrollBar } from "./StyledComponents";
import { useReportList } from "./Context/ReportListContext";
import { useAuth } from "./Context/AuthContext";
import ReportListItem from "./ReportListItem";
import PropTypes from "prop-types";

const ReportList = ({ ReportData }) => {
    const reportListContextObj = useReportList();
    const Auth = useAuth();

    return (
        <Box style={{ width: "100%" }}>
            {ReportData?.length > 0 && (
                <>
                    {" "}
                    <Heading
                        level={2}
                        style={{
                            alignSelf: "flex-start",
                            marginBottom: "30px"
                        }}
                    >
                        List of Reports{" "}
                    </Heading>
                    <table style={{ fontSize: "12px", overflow: "scroll" }}>
                        <TableHeader
                            style={{
                                width: "inherit",
                                boxSizing: "border-box"
                            }}
                        >
                            <ModTableCell scope="col" border="bottom" flex="1">
                                Name
                            </ModTableCell>
                            <ModTableCell scope="col" border="bottom" flex="1">
                                Report date
                            </ModTableCell>
                            <ModTableCell scope="col" border="bottom" flex="1">
                                Injury date
                            </ModTableCell>
                            <ModTableCell
                                scope="col"
                                border="bottom"
                                flex="1"
                            ></ModTableCell>
                        </TableHeader>

                        <TableBodyWithScrollBar>
                            {ReportData?.map((Report, index) => {
                                return (
                                    <ReportListItem
                                        index={index}
                                        key={index}
                                        Name={Report.Name}
                                        DateofReport={Report.DateofReport}
                                        DateofInjury={Report.DateofInjury}
                                        displayDeleteBtn={
                                            Report.Name === Auth.user.Name
                                        }
                                        deleteReportList={
                                            reportListContextObj.deleteReportList
                                        }
                                    />
                                );
                            })}
                        </TableBodyWithScrollBar>
                    </table>
                </>
            )}
            {!ReportData?.length > 0 && (
                <Heading
                    level={2}
                    style={{ alignSelf: "flex-start", marginBottom: "0" }}
                >
                    No report found
                </Heading>
            )}
        </Box>
    );
};
ReportList.defaultProps = {
    ReportData: [
        {
            DateofReport: "-",
            DateofInjury: "-"
        }
    ]
};
ReportList.propTypes = {
    ReportData: PropTypes.arrayOf(
        PropTypes.shape({
            Name: PropTypes.string.isRequired,
            DateofReport: PropTypes.string,
            DateofInjury: PropTypes.string
        })
    ).isRequired
};
export default ReportList;
