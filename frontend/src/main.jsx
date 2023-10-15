import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./themes/globalTheme.js";
import { Grommet } from "grommet";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Grommet theme={theme} full>

        <App />
      </Grommet>
    </Router>
  </React.StrictMode>
);
