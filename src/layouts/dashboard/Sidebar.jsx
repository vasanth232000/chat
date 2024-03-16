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
import Logo from "../../assets/images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode, themeMode } = useSettings();
  const [checked, setChecked] = useState(() => {
    const themes = themeMode === "light" ? false : true;
    return themes;
  });

  return (
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
                  key={el.index}
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? theme.palette.common.black
                        : theme.palette.text.primary,
                  }}
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
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.common.black
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack alignItems={"center"} p={4} spacing={3}>
          <AntSwitch
            checked={checked}
            onChange={() => {
              onToggleMode();
              setChecked(!checked);
            }}
          />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
