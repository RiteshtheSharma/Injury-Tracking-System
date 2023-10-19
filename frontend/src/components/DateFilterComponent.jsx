
import { Box,DateInput,Heading } from 'grommet'
import SmallestDateComponent from './SmallestDateComponent'
import { Star } from 'grommet-icons'
const DateFilterComponent = ({label ,Start,End}) => {

  return (
    <Box direction="column" style={{width:"100%",margin:"20px 0"}} >
    <Heading size="small" margin="none" align="left" >{label}</Heading>
    <Box direction='row' style={{flexWrap:"wrap",justifyContent :"space-between"}} >
    <SmallestDateComponent label="Start Date" setval={Start.setval} val={Start.val} />
    <SmallestDateComponent label="End Date" setval={End.setval} val={End.val} />
    </Box>
  </Box>
  )
}

export default DateFilterComponent