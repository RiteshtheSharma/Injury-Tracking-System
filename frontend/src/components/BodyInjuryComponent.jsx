import { Box, Heading ,Tip,Text} from "grommet";
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import InjuryPointForm from "./InjuryPointForm";
import { Fragment } from "react";
const BodyInjuryComponent = ({
  BodySecName,
  ImgUrl,
  togglePoints,
  InjuryPoints,
}) => {
  const idIndicatingPart = BodySecName.slice(0, 1).toLowerCase();
  const [ItemDataList, setItemDataList] = useState([]);
  const getInjuryPointData = (gridItemId) => {
    return Object.hasOwn(InjuryPoints, gridItemId) ? InjuryPoints[gridItemId] : null;
  };
  useEffect(() => {
  
   
      setItemDataList([...Array.from(Array(512),  (a, index) =>
        getInjuryPointData(`${idIndicatingPart}${index}`))]);
   
  }, [InjuryPoints]);

  const ResponsiveScreenWindow = useResponsiveScreen();
  const calcWidth = () => {
    return ResponsiveScreenWindow.windowWidth > 900
      ? Math.round((ResponsiveScreenWindow.windowWidth - 150) / 2)
      : ResponsiveScreenWindow.windowWidth > 660
      ? Math.round(ResponsiveScreenWindow.windowWidth - 100)
      : Math.round(ResponsiveScreenWindow.windowWidth - 50);
  };
  const calcHeight = () =>
    ResponsiveScreenWindow.windowWidth > 900
      ? Math.round(ResponsiveScreenWindow.windowWidth - 150)
      : ResponsiveScreenWindow.windowWidth > 660
      ? 2 * Math.round(ResponsiveScreenWindow.windowWidth - 100)
      : 2 * Math.round(ResponsiveScreenWindow.windowWidth - 50);

  const [label, setlabel] = useState("");
  const [description, setdescription] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const onClose = () =>{ setModalOpen(undefined);
    setclickedGridItem('');
    setlabel('');
    setdescription('');
  }

  const [clickedGridItem, setclickedGridItem] = useState("");
  const onModelFormSubmit = () => {
    togglePoints(clickedGridItem, label, description);
    console.log(label, description, "Body grid item setPoint");
    setModalOpen(false);
    setclickedGridItem('');
    setlabel('');
    setdescription('');
  };
  const onUncircledItemClick = (e) => {
    setclickedGridItem(e.target.id);
    setModalOpen(true);
  };
  const onCircledItemClick = (e) => {
    togglePoints(e.target.id);
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
          height: `${calcHeight()}px`,
          width: `${calcWidth()}px`,
          alignSelf: "center",
        }}
      >
        {[...ItemDataList].map((Data, index) => (
          <Fragment key={index}>{Data ? (
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
             <Text weight="bold"> {Data?.label}</Text>
             <Text size="small">
             {Data?.description}
            </Text>
            </Box>
          }
          plain
        >
          <span id={`${idIndicatingPart}${index}`} className="cell circle_Dot" onClick={onCircledItemClick}></span>
        </Tip>
      ) : (
        <span  id={`${idIndicatingPart}${index}`} className="cell" onClick={onUncircledItemClick}></span>
      )}</Fragment>
          
        ))}
      </Box>
      {/* display added injury points as table  */}
     
        <Modal
          Open={ModalOpen}
          onClose = {onClose }
          Component={
            <InjuryPointForm
              label={label}
              setlabel={setlabel}
              description={description}
              setdescription={setdescription}
              onClick={onModelFormSubmit}
            />
          }
        />
      
    </Box>
  );
};

export default BodyInjuryComponent;
