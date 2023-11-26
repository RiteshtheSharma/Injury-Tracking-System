// pencil icon component used to select image to be cropped for user profile image setting
import { ModPencilIconLabel } from "../StyledComponents";
import PropTypes from "prop-types";
const ImgInputSelector = ({onImgChange}) => {
  return (
    <ModPencilIconLabel htmlFor="file-input" className="pencil-icon">
    <input id="file-input" type="file" accept="image/*"  onChange={onImgChange}/>
    </ModPencilIconLabel>
  )
}
ImgInputSelector.propTypes = {
  onImgChange : PropTypes.func.isRequired
}
export default ImgInputSelector