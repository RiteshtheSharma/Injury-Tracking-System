import { createContext, useContext, useState } from "react";
const InjuryPointContext = createContext(null);
export const InjuryPointProvider = ({ children }) => {
  const [BackInjuryPoints, setBackInjuryPoints] = useState(
    localStorage.getItem("new_report_back_injury_points") === null
      ? {}
      : JSON.parse(localStorage.getItem("new_report_back_injury_points"))
  );

  const toggleBackPoints = (gridItemId, label = null, description = null) => {
    const tempBackInjuryPoints = { ...BackInjuryPoints };

    if (!isInjuryPointId(gridItemId)) {
      setBackInjuryPoints({
        ...tempBackInjuryPoints,
        [gridItemId]: { label: label, description: description },
      });
      localStorage.setItem("new_report_back_injury_points",JSON.stringify({
        ...tempBackInjuryPoints,
        [gridItemId]: { label: label, description: description },
      }))
    } else {
      const { [gridItemId]: removedProperty, ...newBackInjuryPoints } =
        tempBackInjuryPoints;
        localStorage.setItem("new_report_back_injury_points",JSON.stringify(newBackInjuryPoints))
      setBackInjuryPoints(newBackInjuryPoints);
    }
  };
  const [FrontInjuryPoints, setFrontInjuryPoints] = useState(
    
      localStorage.getItem("new_report_front_injury_points") === null
        ? {}
        : JSON.parse(localStorage.getItem("new_report_front_injury_points"))
  
  );
  const toggleFrontPoints = (gridItemId, label = null, description = null) => {
    const tempFrontInjuryPoints = { ...FrontInjuryPoints };
    if (!isInjuryPointId(gridItemId)) {
      setFrontInjuryPoints({
        ...tempFrontInjuryPoints,
        [gridItemId]: { label: label, description: description },
      });
      localStorage.setItem("new_report_front_injury_points",JSON.stringify({
        ...tempFrontInjuryPoints,
        [gridItemId]: { label: label, description: description },
      }))
    } else {
      const { [gridItemId]: removedProperty, ...newFrontInjuryPoints } =
        tempFrontInjuryPoints;
        localStorage.setItem("new_report_front_injury_points",JSON.stringify(tempFrontInjuryPoints))
      setFrontInjuryPoints(newFrontInjuryPoints);
    }
  };

  const isInjuryPointId = (id) => {
    const idBodyTypePart = id.slice(0, 1);
    if (idBodyTypePart === "b") return Object.hasOwn(BackInjuryPoints, id);
    else return Object.hasOwn(FrontInjuryPoints, id);
  };
  const clearALLInjuryPoints = ()=>{
    console.log("called in injuryContext")
    setBackInjuryPoints({});
    setFrontInjuryPoints({});
    localStorage.removeItem('new_report_front_injury_points');
    localStorage.removeItem('new_report_back_injury_points');
  }
  return (
    <InjuryPointContext.Provider
      value={{
        BackInjuryPoints,
        toggleBackPoints,
        FrontInjuryPoints,
        toggleFrontPoints,
        isInjuryPointId,
        setBackInjuryPoints,
        setFrontInjuryPoints,
        clearALLInjuryPoints
      }}
    >
      {children}
    </InjuryPointContext.Provider>
  );
};
export const useInjuryPoint = () => {
  return useContext(InjuryPointContext);
};
