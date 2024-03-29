import React from "react";
import Router from "./routes";
import ThemeProvider from "./theme";

const App = () => {

  return (
    <ThemeProvider>
      <Router />
      </ThemeProvider>
  );
};

export default App;
