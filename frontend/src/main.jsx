import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./themes/globalTheme.js";
import { Grommet } from "grommet";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import { ReportSearchByDateProvider } from "./components/Context/ReportSearchByDateContext.jsx";
import { ResponsiveScreenProvider } from "./components/Context/ResponsiveScreenContext.jsx";
import { ReportListProvider} from "./components/Context/ReportListContext.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <Router>
    <ResponsiveScreenProvider>
    <AuthProvider>
    <ReportSearchByDateProvider>
     <ReportListProvider>
      <Grommet theme={theme} full style={{display:"flex",flexDirection:"column"}}>

        <App />
      </Grommet>
   </ReportListProvider>
      </ReportSearchByDateProvider>
      </AuthProvider>
    </ResponsiveScreenProvider>  
    </Router>
    
  </React.StrictMode>
);
