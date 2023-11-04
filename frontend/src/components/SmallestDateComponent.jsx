import { useState, useEffect } from "react";
import { DateInput, Box, Heading } from "grommet";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import PropTypes from "prop-types";
import { isValidDate } from "../NonReactCompFunc";
const SmallestDateComponent = ({
  label,
  labelFontSize,
  dir,
  gap,
  inputType,
  setval,
  val,
  smallerDateLimit,
  greaterDateLimit,
}) => {
  const ResponsiveWidth = useResponsiveScreen();
  const getIpStyle = () =>
    ResponsiveWidth.windowWidth > 500 
      ? { width: "initial" ,maxWidth:"40vw"}
      : (dir=== "column" || label==="" ?{width:"calc(100vw - 60px)"}:{ width: "20px" });
  const [IpStyle, setIpStyle] = useState(getIpStyle());


  const handleInputDateChange = (newDateVal) => {
    console.log(newDateVal,"in Smallest Date Component")
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
      alert(`Date value must be ${smallerDateLimitDateobj!==null?(">="+smallerDateLimitDateobj.toDateString()+" & "):""} ${"<="+greaterDateLimitDateobj.toDateString()}`)
  };
  useEffect(() => {
    setIpStyle(getIpStyle());

    return () => {};
  }, [ResponsiveWidth.windowWidth]);

  return (
    <Box direction={dir} gap={gap} justify="between" style={{ width: (label.length>0?"100%":"auto") }}>
    {label.length>0 &&
      <Box
        align="left"
        style={{ padding: "2px 0", marginRight: "5px", fontSize: labelFontSize }}
      >
        {label}
      </Box>
}
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
  dir : PropTypes.string,
  gap : PropTypes.string,
  inputType : PropTypes.string,
  setval: PropTypes.func,
  val: PropTypes.string,
  smallerDateLimit: PropTypes.string,
  greaterDateLimit: PropTypes.string,
};
SmallestDateComponent.defaultProps = {
  labelFontSize:"10px",
  dir:"row",
  gap:"unset",
  inputType:"date",
  smallerDateLimit: "",
  greaterDateLimit: "",
};
export default SmallestDateComponent;
