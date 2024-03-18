import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import React, { useState } from "react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Stickers",
  },
  {
    color: "#0159b2",
    icon: <User size={24} />,
    y: 382,
    title: "Stickers",
  },
];

const ChatInput = ({ setSelectEmoji, setActions, actions }) => {
  return (
    <StyledInput
      fullWidth
      placeholder="write a message....."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            {actions ? (
              <Stack sx={{ position: "relative" }}>
                {Actions.map((el) => {
                  return (
                    <Tooltip title={el.title} placement="right">
                      <Fab
                        sx={{
                          position: "absolute",
                          top: -el.y,
                          backgroundColor: el.color,
                        }}
                      >
                        {el.icon}
                      </Fab>
                    </Tooltip>
                  );
                })}
              </Stack>
            ) : (
              ""
            )}

            <InputAdornment>
              <IconButton onClick={() => setActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={() => setSelectEmoji((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const [selectEmoji, setSelectEmoji] = useState(false);
  const [actions, setActions] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: isLight ? "#f8faff" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
      p={2}
    >
      <Stack direction={"row"} spacing={2}>
        <Stack width={"100%"}>
          {selectEmoji ? (
            <Box sx={{ position: "fixed", zIndex: 10, bottom: 81, right: 100 }}>
              <Picker
                data={data}
                onEmojiSelect={console.log}
                theme={theme.palette.mode}
              />
            </Box>
          ) : (
            ""
          )}

          <ChatInput
            setSelectEmoji={setSelectEmoji}
            setActions={setActions}
            actions={actions}
          />
        </Stack>
        <Box
          sx={{
            width: 48,
            height: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt style={{ color: "#fff" }} />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
