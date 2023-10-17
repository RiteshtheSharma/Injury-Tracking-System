import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./themes/globalTheme.js";
import { Grommet } from "grommet";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <Router>
    <AuthProvider>
      <Grommet theme={theme} full style={{display:"flex",flexDirection:"column"}}>

        <App />
      </Grommet>
      </AuthProvider>
    </Router>
    
  </React.StrictMode>
);
