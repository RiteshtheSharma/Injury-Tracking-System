import { useState, useEffect } from "react";
import { DateInput, Box, Heading } from "grommet";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import PropTypes from "prop-types";
const SmallestDateComponent = ({
  label,
  setval,
  val,
  smallerDateLimit,
  greaterDateLimit,
}) => {
  const ResponsiveWidth = useResponsiveScreen();
  const getIpStyle = () =>
    ResponsiveWidth.windowWidth > 500
      ? { width: "initial" }
      : { width: "20px" };
  const [IpStyle, setIpStyle] = useState(getIpStyle());

  function isValidDate(dateString) {
    return !isNaN(Date.parse(dateString));
  }
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
  };
  useEffect(() => {
    setIpStyle(getIpStyle());

    return () => {};
  }, [ResponsiveWidth.windowWidth]);

  return (
    <Box direction="row" justify="between" style={{ width: "100%" }}>
      <Box
        align="left"
        style={{ padding: "2px 0", marginRight: "5px", fontSize: "10px" }}
      >
        {label}
      </Box>

      <input
        type="date"
        value={val}
        style={IpStyle}
        onChange={(e) => {
          handleInputDateChange(e.target.value);
        }}
      />
    </Box>
  );
};
SmallestDateComponent.PropTypes = {
  label: PropTypes.string,
  setval: PropTypes.func,
  val: PropTypes.string,
  smallerDateLimit: PropTypes.string,
  greaterDateLimit: PropTypes.string,
};
SmallestDateComponent.defaultProps = {
  smallerDateLimit: "",
  greaterDateLimit: "",
};
export default SmallestDateComponent;
