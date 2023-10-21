import { createContext, useContext, useState } from "react";
const ReportSearchContext = createContext(null);
export const ReportSearchProvider = ({ children }) => {

 
  const [DateOfInjuryStartDate, setDateOfInjuryStartDate] = useState( "");
  const [DateOfInjuryEndDate, setDateOfInjuryEndDate] = useState( "");
  const [DateOfReportStartDate, setDateOfReportStartDate] = useState( "");
  const [DateOfReportEndDate, setDateOfReportEndDate] = useState( "");
//  const SetDateOfInjuryEndDate =(value)=>{

//  }

  return (
    <ReportSearchContext.Provider value={{ DateOfInjuryStartDate, setDateOfInjuryStartDate,DateOfInjuryEndDate, setDateOfInjuryEndDate,DateOfReportStartDate, setDateOfReportStartDate,DateOfReportEndDate, setDateOfReportEndDate  }}>
      {children}
    </ReportSearchContext.Provider>
  );
};
export const useReportFeature = () => {
  return useContext(ReportSearchContext);
};