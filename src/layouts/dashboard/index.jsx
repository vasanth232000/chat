import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.ico";
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "100vh",
          width: 100,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{ width: "100%" }}
          spacing={3}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: 64,
              height: 64,
              borderRadius: 1.2,
            }}
          >
            <img src={Logo} alt={"chat app logo"} style={{ width: "100%" }} />
          </Box>
          <Stack spacing={3}>
          {Nav_Buttons.map((el) => {
            console.log(el.icon)
            return <IconButton key={el.index}>{el.icon}</IconButton>;
          })}
          </Stack>
          <Divider/>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
