import React from "react";
import Router from "./routes";
import { ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
