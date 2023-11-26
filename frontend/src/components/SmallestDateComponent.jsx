//reportlist filter for individual date filter (date of report or date of injury)
import { useState, useEffect } from "react";
import { Box } from "grommet";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import PropTypes from "prop-types";
import { isValidDate } from "../NonReactCompFunc";

const SmallestDateComponent = ({
    label,
    labelFontSize,
    dir, // flex direction for label and input tag
    gap, // value for grommet Box container b/w input label and input tag
    inputType,
    setval, // usestate setstate function used as value of input date
    val, // usestate variable used as value of input date
    smallerDateLimit, // smallest allowed date to be entered in input date tag
    greaterDateLimit // largest allowed date to be entered in input date tag
}) => {
    const ResponsiveWidth = useResponsiveScreen();
    // function compute style object for input tag
    const getIpStyle = () =>
        ResponsiveWidth.windowWidth > 500
            ? { width: "initial", maxWidth: "40vw" }
            : dir === "column" || label === ""
              ? { width: "calc(100vw - 60px)" }
              : { width: "20px" };

    const [IpStyle, setIpStyle] = useState(getIpStyle());

    // set value of parent val usestate when input tag's value changes while also validating it for the range set by 'smallerDateLimit' & 'greaterDateLimit'
    // props if value does' t fits then alert will be generated for user to give appropriate i/p
    const handleInputDateChange = (newDateVal) => {
        if (newDateVal.length === 0) {
            setval("");
            return;
        }

        let newDateValDateobj = new Date(newDateVal),
            smallerDateLimitDateobj = null,
            greaterDateLimitDateobj = null;
        if (isValidDate(smallerDateLimit))
            smallerDateLimitDateobj = new Date(smallerDateLimit);
        if (isValidDate(greaterDateLimit))
            greaterDateLimitDateobj = new Date(greaterDateLimit);
        if (
            (smallerDateLimitDateobj === null ||
                newDateValDateobj >= smallerDateLimitDateobj) &&
            (greaterDateLimitDateobj === null ||
                newDateValDateobj <= greaterDateLimitDateobj)
        )
            setval(newDateVal);
        else
            alert(
                `Date value must be ${
                    smallerDateLimitDateobj !== null
                        ? ">=" + smallerDateLimitDateobj.toDateString() + " & "
                        : ""
                } ${
                    greaterDateLimitDateobj !== null
                        ? "<=" + greaterDateLimitDateobj.toDateString()
                        : "<=" + new Date().toDateString()
                }`
            );
    };
    // change the input date style on the basis of site window width
    useEffect(() => {
        setIpStyle(getIpStyle());

        return () => {};
    }, [ResponsiveWidth.windowWidth]);

    return (
        <Box
            direction={dir}
            gap={gap}
            justify="between"
            style={{ width: label.length > 0 ? "100%" : "auto" }}
        >
            {label.length > 0 && (
                <Box
                    align="left"
                    style={{
                        padding: "2px 0",
                        marginRight: "5px",
                        fontSize: labelFontSize
                    }}
                >
                    {label}
                </Box>
            )}
            <input
                type={inputType}
                value={val}
                style={IpStyle}
                onChange={(e) => {
                    handleInputDateChange(e.target.value);
                }}
            />
        </Box>
    );
};
SmallestDateComponent.propTypes = {
    label: PropTypes.string,
    labelFontSize: PropTypes.string,
    dir: PropTypes.string,
    gap: PropTypes.string,
    inputType: PropTypes.string,
    setval: PropTypes.func,
    val: PropTypes.string,
    smallerDateLimit: PropTypes.string,
    greaterDateLimit: PropTypes.string
};
SmallestDateComponent.defaultProps = {
    labelFontSize: "10px",
    dir: "row",
    gap: "unset",
    inputType: "date",
    smallerDateLimit: "",
    greaterDateLimit: ""
};
export default SmallestDateComponent;
