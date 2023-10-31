import { createContext, useContext, useState } from "react";
const InjuryPointContext = createContext(null);
export const InjuryPointProvider = ({ children }) => {
    
    const [BackInjuryPoints, setBackInjuryPoints] = useState({});
  
    const toggleBackPoints = (gridItemId,label=null,description=null)=>{
    const BackGridElementClassList = {...BackInjuryPoints};
     if(isInjuryPointId(gridItemId))
     {setBackInjuryPoints({...BackInjuryPoints,[gridItemId]:{label:label,description:description}})}
    else 
    {const {[gridItemId]: removedProperty , ...newBackGridElementClassList} = BackGridElementClassList; 
     setBackInjuryPoints(newBackGridElementClassList);
    }
     
  } 
  const [FrontInjuryPoints, setFrontInjuryPoints] = useState({});
  const toggleFrontPoints = (gridItemId,label=null,description=null)=>{
    const FrontGridElementClassList = {...FrontInjuryPoints};
    if(isInjuryPointId(gridItemId))
    { setFrontInjuryPoints({...FrontInjuryPoints,[gridItemId]:{label:label,description:description}});}
   else 
   {const {[gridItemId]: removedProperty , ...newFrontGridElementClassList} = FrontGridElementClassList; 
    setFrontInjuryPoints(newFrontGridElementClassList);
   }   
  }

  const isInjuryPointId =(id)=>{
    const idBodyTypePart = id.slice(0,1);
    if(idBodyTypePart === 'b') return Object.hasOwn(BackInjuryPoints,id) 
    else return Object.hasOwn(FrontInjuryPoints,id) 
  }

  

  return (
    <InjuryPointContext.Provider value={{BackInjuryPoints,toggleBackPoints,FrontInjuryPoints,toggleFrontPoints,isInjuryPointId }}>
      {children}
    </InjuryPointContext.Provider>
  );
};
export const useInjuryPoint = () => {
  return useContext(InjuryPointContext);
};