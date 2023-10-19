import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./themes/globalTheme.js";
import { Grommet } from "grommet";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import { ReportSearchProvider } from "./components/Context/ReportSearchContext.jsx";
import { ResponsiveScreenProvider } from "./components/Context/ResponsiveScreenContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <Router>
    <ResponsiveScreenProvider>
    <AuthProvider>
    <ReportSearchProvider>
      <Grommet theme={theme} full style={{display:"flex",flexDirection:"column"}}>

        <App />
      </Grommet>
      </ReportSearchProvider>
      </AuthProvider>
    </ResponsiveScreenProvider>  
    </Router>
    
  </React.StrictMode>
);
