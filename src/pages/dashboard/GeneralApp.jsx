import React from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 400px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
