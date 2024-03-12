import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 20,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  const { onToggleMode } = useSettings();
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "100vh",
          width: 80,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{ height: "100%", width: "100%" }}
          justifyContent={"space-between"}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                width: 54,
                height: 54,
                borderRadius: 1.2,
              }}
            >
              <img src={Logo} alt={"chat app logo"} style={{ width: "100%" }} />
            </Box>
            <Stack spacing={3}>
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    key={el.index}
                  >
                    <IconButton
                      sx={{ color: "#fff" }}
                      onClick={() => setSelected(el.index)}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{ color: "#000" }}
                    onClick={() => setSelected(el.index)}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    onClick={() => setSelected(3)}
                    sx={{ color: "#fff" }}
                  >
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(3)}
                  sx={{ color: "#000" }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack alignItems={"center"} p={4} spacing={3}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
