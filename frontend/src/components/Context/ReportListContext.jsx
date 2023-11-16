import { createContext, useContext, useState } from "react";
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
        {// assume being fetched by server first time
          ReportData = [
          { 
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
          {
            "DateofInjury": "2023-10-30T12:03",
            "backInjuryPoints": {
              "b24": {
                "label": "head back",
                "description": ""
              }
            },
            "frontInjuryPoints": {
              "f264": {
                "label": "nunnu",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T09:59:35.172Z"
          },
          {
            "DateofInjury": "2023-06-26T16:04",
            "backInjuryPoints": {
              "b265": {
                "label": "rigth butt",
                "description": "hurt"
              }
            },
            "frontInjuryPoints": {
              "f273": {
                "label": "palm",
                "description": ""
              }
            },
            "Name": "userName",
            "DateofReport": "2023-11-05T10:00:20.977Z"
          },
        ]; 
        
          
          localStorage.setItem('report_list',JSON.stringify(ReportData)) 
      
      }
        return ReportData;
    }
    const initializeReportList=()=>{
      setReportList(fetchReportList())
    }
    const addReportList = (newReport) =>{
        // server code to add newReport to server 
        // change 'index' with 'id' when server is ready
     
        const newReportList = [...ReportList,{...newReport,Name:Auth.user.Name,DateofReport:(new Date()).toJSON()}] ; // assume to be new report list fetched from server
        localStorage.setItem('report_list',JSON.stringify(newReportList))
        setReportList(newReportList);
    }
    const updateReportList = (newReport,index) =>{
      // server code to add newReport to server 
      // change 'index' with 'id' when server is ready
      const newReportList = [...ReportList];  // assume to be new report list fetched from server
      newReportList.splice(index,1,newReport)
      localStorage.setItem('report_list',JSON.stringify([...newReportList]))
      setReportList([...newReportList]);
  }
  const deleteReportList =(id)=>{ // until server comes into play index of range of no of Reports will be used
// change 'index' with 'id' when server is ready
    const newReportList = [...ReportList];  // assume to be new report list fetched from server
    newReportList.splice(id,1)
    localStorage.setItem('report_list',JSON.stringify([...newReportList]))
    setReportList([...newReportList]);

  }
  const [ReportList, setReportList] = useState([{}])
  
  return (
    <ReportListContext.Provider value={{ ReportList,addReportList , updateReportList,initializeReportList,deleteReportList}}>
      {children}
    </ReportListContext.Provider>
  );
};
export const useReportList = () => {
  return useContext(ReportListContext);
};