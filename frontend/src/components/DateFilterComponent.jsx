
import { Box,DateInput,Heading } from 'grommet'
import SmallestDateComponent from './SmallestDateComponent'
import { Star } from 'grommet-icons'
const DateFilterComponent = ({label ,Start,End}) => {

  return (
    <Box direction="column" style={{margin:"5px",width:"100%"}}>
    <Box align='left' style={{fontWeight:"bold", fontFamily: "sans-serif",fontSize:"15px"}}>{label}</Box>
    <Box direction='row' style={{flexWrap:"wrap",justifyContent :"space-between"}} >
    <SmallestDateComponent label="Start Date" setval={Start.setval} val={Start.val} />
    <SmallestDateComponent label="End Date" setval={End.setval} val={End.val} />
    </Box>
  </Box>
  )
}

export default DateFilterComponent