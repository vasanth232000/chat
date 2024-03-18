import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"100%"}>
      {/* header */}
      <Header />
      {/* Msg */}
      <Box sx={{ flexGrow: 1, width: "100%",overflowY:"scroll" }}>
        <Message/>
      </Box>
      {/* footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
