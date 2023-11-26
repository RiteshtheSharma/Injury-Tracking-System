// Component description : used to denote back side or front side of body with injury mapping.
// The grid element has bodysection image as background image i.e front section image or back one
// This grid element is divided into 512 grid items so as to map injury point easily
// One of the grid item can be mapped as injury by clicking it converting it into a red circular mark after which you need to fill form about injury as a modal
// You can deleted the injury mark by clicking it i.e red circular mark
// Each grid item have id with 2 parts 1 > 1st character with f or b value ( f-> for forward body section , b -> backward body section) 2> rest characters which are the grid item number i.e for 1st grid item 0 , second 1 & for 512th 511 as matrix items are numbered serial wise 
// this component 's process can be explained as 
// when the user clicks on any grid item then 'togglePoints' function prop updates InjuryPoints (read comment right to 'InjuryPoints') according to whether the grid item is marked as injurypoint (then un marked ) or not 
// when user click on unmarked grid to mark it as area with injury he/she is given a form in form of modal to fill the label and description of injury when user fills it and clicks on submit button then in 'InjuryPoints' the given grid item is added to it  by 'togglePoints' by its id as key and object of label and description from modal form as value 
//if the clicked grid item was marked as injury then it is removed by 'togglePoints' from 'InjuryPoints' and after this as 'InjuryPoints' is included in useEffect array parameter so the useEffect executes which reinitializes 'ItemDataList'(read its description at top of 'ItemDataList' useState) 
import { Box, Heading } from "grommet";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import InjuryPointForm from "./InjuryPointForm";
import { Fragment } from "react";
import BodyInjuryMark from "./BodyInjuryMark";
import PropTypes from "prop-types";
const BodySideInjuryMapping = ({
    BodySecName, // front or back section
    ImgUrl,
    togglePoints, // function to remove /add injury points
    InjuryPoints // object in which each property key -> id of grid item  which are marked as injury points and value as an object with 2 properties label& description
}) => {
    // get 'f' character for front section of body or 'b' for back section to be used in giving id to each grid item of grid element having body image as background where each grid element can be converted to injury mark by clicking and toggle to normal grid element by again clicking
    const idIndicatingPart = BodySecName.slice(0, 1).toLowerCase();

    // used to represent each grid item as array having objects and null. Each array element index corresponds to each grid item 's id 's numerical part  
    // array null element is for unmarked grid item and array object element for marked ones 
    const [ItemDataList, setItemDataList] = useState([]);

    const getInjuryPointData = (gridItemId) => {
        return Object.hasOwn(InjuryPoints, gridItemId)
            ? InjuryPoints[gridItemId]
            : null;
    };

    useEffect(() => {
        
        setItemDataList([
            ...Array.from(Array(512), (a, index) =>
                getInjuryPointData(`${idIndicatingPart}${index}`)
            )
        ]);
    }, [InjuryPoints]);
    const [clickedGridItem, setclickedGridItem] = useState("");
    const [label, setlabel] = useState("");
    const [description, setdescription] = useState("");
    const [ModalOpen, setModalOpen] = useState(false);
    const onClose = () => {
        setModalOpen(undefined);
        setclickedGridItem("");
        setlabel("");
        setdescription("");
    };

  
    const onModelFormSubmit = () => {
        togglePoints(clickedGridItem, label, description);
        console.log(label, description, "Body grid item setPoint");
        setModalOpen(false);
        setclickedGridItem("");
        setlabel("");
        setdescription("");
    };
    const onUncircledItemClick = (e) => {
        setclickedGridItem(e.target.id);
        setModalOpen(true);
    };
    const onCircledItemClick = (e) => {
        togglePoints(e.target.id);
    };

    const ResponsiveScreenWindow = useResponsiveScreen();
/*  for calculating html element with body sec image  background width and height as in src image height = 2*width */
    const calcWidth = () => {
        return ResponsiveScreenWindow.windowWidth > 900
            ? Math.round((ResponsiveScreenWindow.windowWidth - 150) / 2)
            : ResponsiveScreenWindow.windowWidth > 660
              ? Math.round(ResponsiveScreenWindow.windowWidth - 100)
              : Math.round(ResponsiveScreenWindow.windowWidth - 50);
    };
  
    return (
        <Box
            align="center"
            elevation=""
            style={{ border: "2px solid #7D4CDB", borderRadius: "20px" }}
        >
            <Heading level={4}> {BodySecName}</Heading>
            <Box
                className="grid"
                style={{
                    backgroundImage: `url(${ImgUrl})`,
                    borderRadius: "20px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: `${2*calcWidth()}px`,
                    width: `${calcWidth()}px`,
                    alignSelf: "center"
                }}
            >
                {[...ItemDataList].map((Data, index) => (
                    <Fragment key={index}>
                        {Data ? (
                            <BodyInjuryMark
                                id={`${idIndicatingPart}${index}`}
                                onClick={onCircledItemClick}
                                label={Data?.label}
                                description={Data?.description}
                            />
                        ) : (
                            <span
                                id={`${idIndicatingPart}${index}`}
                                className="cell"
                                onClick={onUncircledItemClick}
                            ></span>
                        )}
                    </Fragment>
                ))}
            </Box>
            {/* display added injury points as table  */}

            <Modal
                Open={ModalOpen}
                onClose={onClose}
                > <InjuryPointForm
                        label={label}
                        setlabel={setlabel}
                        description={description}
                        setdescription={setdescription}
                        onClick={onModelFormSubmit}
                    /></Modal>
        </Box>
    );
};
BodySideInjuryMapping.propTypes = {
    BodySecName: PropTypes.string.isRequired,
    ImgUrl: PropTypes.string.isRequired,
    togglePoints: PropTypes.func.isRequired,
    InjuryPoints: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};
export default BodySideInjuryMapping;
