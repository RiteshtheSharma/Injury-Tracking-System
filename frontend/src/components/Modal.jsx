// component description : enables a react component eg form , carousel etc to be used in a modal
// onClose prop takes a function to close modal by setting Open prop to false
// children prop can be form ,carousel or any other react component
import { Box,Layer, } from "grommet";
import PropTypes from 'prop-types'
export const Modal = ({ Open, children, onClose }) => {
    return (
        <>
            {Open && (
                <Layer
                    id="hello world"
                    position="center"
                    onClickOutside={onClose}
                    onEsc={onClose}
                >
                    <Box pad="medium" gap="small" width="medium">
                        {children}
                        <Box
                            as="footer"
                            gap="small"
                            direction="row"
                            align="center"
                            justify="end"
                            pad={{ top: "medium", bottom: "small" }}
                        ></Box>
                    </Box>
                </Layer>
            )}
        </>
    );
};
Modal.propTypes = { 
children : PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired,
onClose : PropTypes.func.isRequired
}