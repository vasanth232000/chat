import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from "./contexts/SettingsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>
);
