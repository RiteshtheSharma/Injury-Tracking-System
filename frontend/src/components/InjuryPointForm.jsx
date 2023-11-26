// form to describe marked grid item (injured area) belongs to html element having background image of any of the body section image
import { Form, FormField, Box, Button, Heading } from "grommet";
import PropTypes from "prop-types";
const InjuryPointForm = ({
    label,
    setlabel,
    description,
    setdescription,
    onClick
}) => {
    return (
        <Box align="center" pad="medium">
            <Heading level={2}>Injury Information</Heading>
            <Form onSubmit={(e) => e.preventDefault()}>
                <FormField
                    name="label"
                    label="Label"
                    required
                    value={label}
                    onChange={(event) => setlabel(event.target.value)}
                />
                <FormField
                    name="desc"
                    label="desc"
                    required
                    value={description}
                    onChange={(event) => setdescription(event.target.value)}
                />
                <Button
                    type="submit"
                    primary
                    label="Submit"
                    onClick={onClick}
                />
            </Form>
        </Box>
    );
};
InjuryPointForm.propTypes = {
    label: PropTypes.string.isRequired,
    setlabel: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    setdescription: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};
export default InjuryPointForm;
