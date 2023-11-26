
import { Tip,Box ,Text} from 'grommet'
import PropTypes from "prop-types";
const BodyInjuryMark = ({label,description,onClick,id}) => {
  return (
    <Tip
          dropProps={{ align: { left: "right" } }}
          
          content={
            <Box
              pad="small"
              style={{
                backgroundColor: "grey",
                color: "white",
                margin: "5px",
                borderRadius: "20px",
              }}
            >
             <Text weight="bold"> {label}</Text>
             <Text size="small">
             {description}
            </Text>
            </Box>
          }
          plain
        >
          <span id={id} className="cell circle_Dot" onClick={onClick}></span>
        </Tip>
  )
} 
BodyInjuryMark.propTypes = {
  label: PropTypes.string.isRequired,
  description : PropTypes.string,
  onClick : PropTypes.func.isRequired, 
  id: PropTypes.string.isRequired 
}
BodyInjuryMark.defaultProps = {
  description : ""
}
export default BodyInjuryMark