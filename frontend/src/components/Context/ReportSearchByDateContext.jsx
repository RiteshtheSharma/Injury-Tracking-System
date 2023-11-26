// for setting the range of date of report and date of injury while filtering the report list 
import { createContext, useContext, useState } from "react";
const ReportSearchByDateContext = createContext(null);
export const ReportSearchByDateProvider = ({ children }) => {

 
  const [DateOfInjuryStartDate, setDateOfInjuryStartDate] = useState( "");
  const [DateOfInjuryEndDate, setDateOfInjuryEndDate] = useState( "");
  const [DateOfReportStartDate, setDateOfReportStartDate] = useState( "");
  const [DateOfReportEndDate, setDateOfReportEndDate] = useState( "");
//  const SetDateOfInjuryEndDate =(value)=>{

//  }

  return (
    <ReportSearchByDateContext.Provider value={{ DateOfInjuryStartDate, setDateOfInjuryStartDate,DateOfInjuryEndDate, setDateOfInjuryEndDate,DateOfReportStartDate, setDateOfReportStartDate,DateOfReportEndDate, setDateOfReportEndDate  }}>
      {children}
    </ReportSearchByDateContext.Provider>
  );
};
export const useReportByDateFeature = () => {
  return useContext(ReportSearchByDateContext);
};