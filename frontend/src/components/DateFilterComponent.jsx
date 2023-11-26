// reportlist filtering component by report date  date when person got injured
// (props)  Start : object with usestate variable and setstate function for setting date 's lower limit 
// (props)  End : object with usestate variable and setstate function for setting date 's upper limit 

import { Box } from "grommet";
import SmallestDateComponent from "./SmallestDateComponent";
import PropTypes from "prop-types";
const DateFilterComponent = ({ label, Start, End }) => {
    return (
        <Box direction="column" style={{ margin: "5px", width: "100%" }}>
            <Box
                align="left"
                style={{
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    fontSize: "15px"
                }}
            >
                {label}
            </Box>
            <Box
                direction="row"
                style={{ flexWrap: "wrap", justifyContent: "space-between" }}
            >
                <SmallestDateComponent
                    label="Start Date"
                    setval={Start.setval}
                    val={Start.val}
                    greaterDateLimit={End.val}
                />
                <SmallestDateComponent
                    label="End Date"
                    setval={End.setval}
                    val={End.val}
                    smallerDateLimit={Start.val}
                />
            </Box>
        </Box>
    );
};
DateFilterComponent.propTypes = {
    label: PropTypes.string.isRequired,
    Start: PropTypes.shape({ setval: PropTypes.func, val: PropTypes.string }),
    End: PropTypes.shape({ setval: PropTypes.func, val: PropTypes.string })
};
export default DateFilterComponent;
