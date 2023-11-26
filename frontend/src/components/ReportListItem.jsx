import { TableRow, Tip, Button } from "grommet";
import { ModTableCell, ModLink } from "./StyledComponents";
import { Trash } from "grommet-icons";
import PropTypes from "prop-types";
import { isValidDate } from "../NonReactCompFunc";
const ReportListItem = ({
    index,
    Name,
    DateofReport,
    DateofInjury,
    displayDeleteBtn,
    deleteReportList
}) => {
    // used to trim the reporting user name so that it has length upto a maximum length
    const getRenderingName = (Name) => {
        const nameLength = Name?.length;
        let newname;
        if (nameLength <= 15) {
            newname = Name;

            for (let i = 0; i < 15 - nameLength; i++) {
                newname += " ";
            }
        } else newname = Name?.slice(0, 12) + "...";

        return newname;
    };

    // set the datestring in DD/MM/YYY format
    const getProperDateString = (DateString) => {
        const dateVar = new Date(DateString);
        return isValidDate(DateString)
            ? `${dateVar.getDate()}\/${
                  dateVar.getMonth() + 1
              }\/${dateVar.getFullYear()}`
            : "-";
    };
    return (
        <TableRow>
            <ModTableCell>
                {" "}
                <Tip
                    content={
                        <pre
                            style={{
                                backgroundColor: "white",
                                fontFamily: "monospace",
                                fontSize: "12px",
                                width: "fit-content"
                            }}
                        >
                            {Name}
                        </pre>
                    }
                    plain
                >
                    <ModLink to={`/report/${index}`}>
                        <pre>{getRenderingName(Name)}</pre>
                    </ModLink>
                </Tip>{" "}
            </ModTableCell>
            <ModTableCell>
                <p>
                    <ModLink to={`/report/${index}`}>
                        {getProperDateString(DateofReport)}
                    </ModLink>
                </p>
            </ModTableCell>
            <ModTableCell>
                <p>
                    <ModLink to={`/report/${index}`}>
                        {getProperDateString(DateofInjury)}
                    </ModLink>
                </p>
            </ModTableCell>

            {displayDeleteBtn && (
                <ModTableCell style={{ alignItems: "center" }}>
                    <Button
                        onClick={() => deleteReportList(index)}
                        size="small"
                        style={{ padding: "4px" }}
                        plain={false}
                        icon={<Trash size="small" />}
                    />
                </ModTableCell>
            )}
        </TableRow>
    );
};
ReportListItem.propTypes = {
    index: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    DateofReport: PropTypes.string,
    DateofInjury: PropTypes.string,
    displayDeleteBtn: PropTypes.bool,
    deleteReportList: PropTypes.func
};
ReportListItem.defaultProps = {
    DateofReport: "-",
    DateofInjury: "-",
    displayDeleteBtn: false,
    deleteReportList: () => {}
};
export default ReportListItem;
