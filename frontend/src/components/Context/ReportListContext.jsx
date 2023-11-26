// context for report data of all the users in database fetched for admin (if user is a person of authority) user or only the data of normal user himself/herself  
//the reportlist data can be represented by following json form  [ {DateofInjury:"dateTimeString",Name:"username",_id:"string represent user id as report foreign key"
//                                                                   ,DateofReport:"dateTimeString",
//                                                                  "backInjuryPoints": {
//              ...,
//              "b[0-511]": {
//               "label": "string",
//                "description": "string"
//              },
//               ...
//            },
//            "frontInjuryPoints": {
//                ...,
//              "f[0-511]": {
//                "label": "string",
//                "description": "string"
//              }, ...
//            }, } ,... ]
// in each report object (element of reportlist array ) backInjuryPoints & frontInjuryPoints represent injury points marked at body 's back section image 
// and front section image respectively where each property of any (backInjuryPoints & frontInjuryPoints->InjuryPoint) of them represents the injury point in form of grid item 
// number (as represented by numerical part of reach InjuryPoint 's property) as numbered in matrix of grid at which injury can be marked as representative of 
//actual injury of patient , each property of InjuryPoint have same name as ids of the grid item of html element having (front/back)Body section background image 
// there can be 0-512 injuryPoint properties as there are 512 grid items of html element having (front/back)Body section background image 
import { createContext, useContext, useState } from "react";
import {useAuth} from './AuthContext'
import { SampleReportData } from "../SampleData";
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
          ...SampleReportData
        ]; 
        
          
          localStorage.setItem('report_list',JSON.stringify(ReportData)) 
      
      }
        return ReportData;
    }
    const initializeReportList=()=>{
      const fetchedReportList = fetchReportList();
      setReportList(fetchedReportList)
      return fetchedReportList
    }
    const addReportList = (newReport) =>{
        // server code to add newReport to server 
        
     
        const newReportList = [...ReportList,{...newReport,Name:Auth.user.Name,DateofReport:(new Date()).toJSON()}] ; // assume to be new report list fetched from server
        localStorage.setItem('report_list',JSON.stringify(newReportList))
        setReportList(newReportList);
    }
    const updateReportList = (newReport,index) =>{
      // server code to add newReport to server 
     
      const newReportList = [...ReportList];  // assume to be new report list fetched from server
      newReportList.splice(index,1,newReport)
      localStorage.setItem('report_list',JSON.stringify([...newReportList]))
      setReportList([...newReportList]);
  }
  const deleteReportList =(id)=>{ // until server comes into play index of range of no of Reports will be used

    const newReportList = [...ReportList];  // assume to be new report list fetched from server
    newReportList.splice(id,1)
    localStorage.setItem('report_list',JSON.stringify([...newReportList]))
    setReportList([...newReportList]);

  }
  const [ReportList, setReportList] = useState([])
  
  return (
    <ReportListContext.Provider value={{ ReportList,addReportList , updateReportList,initializeReportList,deleteReportList}}>
      {children}
    </ReportListContext.Provider>
  );
};
export const useReportList = () => {
  return useContext(ReportListContext);
};