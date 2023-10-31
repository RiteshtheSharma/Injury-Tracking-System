import { createContext, useContext, useState } from "react";
const InjuryPointContext = createContext(null);
export const InjuryPointProvider = ({ children }) => {
    const gridElementClassList = Array.from(Array(8192),()=>'cell');
    const [BackInjuryPoints, setBackInjuryPoints] = useState(gridElementClassList);
    const toggleBackPoints = (event)=>{
    const BackGridElementClassList = [...BackInjuryPoints];
    const index =  parseInt((event.target.id).slice(1));
     BackGridElementClassList[index]=(BackGridElementClassList[index]==="cell")?"cell circle_Dot":"cell";
     setBackInjuryPoints(BackGridElementClassList);
  } 
  const [FrontInjuryPoints, setFrontInjuryPoints] = useState([...gridElementClassList]);
  const toggleFrontPoints = (event)=>{
    const FrontGridElementClassList = [...FrontInjuryPoints];
    const index =  parseInt((event.target.id).slice(1));
     FrontGridElementClassList[index]=(FrontGridElementClassList[index]==="cell")?"cell circle_Dot":"cell";
     setFrontInjuryPoints(FrontGridElementClassList);
  }
  return (
    <InjuryPointContext.Provider value={{BackInjuryPoints,toggleBackPoints,FrontInjuryPoints,toggleFrontPoints }}>
      {children}
    </InjuryPointContext.Provider>
  );
};
export const useInjuryPoint = () => {
  return useContext(InjuryPointContext);
};