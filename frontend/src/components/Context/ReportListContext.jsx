import { createContext, useContext, useState } from "react";
import { SampleReportData } from "../SampleData";
import {useAuth} from './AuthContext'
const ReportListContext= createContext(null);
export const ReportListProvider = ({ children }) => {
    const Auth = useAuth();
    const fetchReportList = ()=>{
        // assume being fetched by server first time
        let ReportData;
        if(localStorage.getItem('report_list')!==null)
              ReportData = JSON.parse(localStorage.getItem('report_list'));
         else   
        {localStorage.setItem('report_list',JSON.stringify(SampleReportData)) 
      
      ReportData = SampleReportData;}
        return ReportData;
    }
    const updateReportList = (newReport) =>{
        // server code to add newReport to server 
        
     
        const newReportList = [...ReportList,{...newReport,Name:Auth.user.Name,DateofReport:(new Date()).toJSON()}] ; // assume to be new report list fetched from server
        localStorage.setItem('report_list',JSON.stringify(newReportList))
        setReportList(newReportList);
    }
  const [ReportList, setReportList] = useState(fetchReportList())
  
  return (
    <ReportListContext.Provider value={{ ReportList,updateReportList }}>
      {children}
    </ReportListContext.Provider>
  );
};
export const useReportList = () => {
  return useContext(ReportListContext);
};