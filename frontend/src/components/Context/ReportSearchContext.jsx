import { createContext, useContext, useState } from "react";
const ReportSearchContext = createContext(null);
export const ReportSearchProvider = ({ children }) => {

  const NewDateVal = new Date().toISOString();
  const [DateOfInjuryStartDate, setDateOfInjuryStartDate] = useState( NewDateVal);
  const [DateOfInjuryEndDate, setDateOfInjuryEndDate] = useState( NewDateVal);
  const [DateOfReportStartDate, setDateOfReportStartDate] = useState( NewDateVal);
  const [DateOfReportEndDate, setDateOfReportEndDate] = useState( NewDateVal);


  return (
    <ReportSearchContext.Provider value={{ DateOfInjuryStartDate, setDateOfInjuryStartDate,DateOfInjuryEndDate, setDateOfInjuryEndDate,DateOfReportStartDate, setDateOfReportStartDate,DateOfReportEndDate, setDateOfReportEndDate  }}>
      {children}
    </ReportSearchContext.Provider>
  );
};
export const useReportFeature = () => {
  return useContext(ReportSearchContext);
};