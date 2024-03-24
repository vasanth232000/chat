import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Message_options } from "../../data";

const DocMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{
              color: theme.palette.text,
              fontWeight: 400,
            }}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MenuItems />
    </Stack>
  );
};

const LinkMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            spacing={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: "210px", borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant={"subtitle2"}>Creating Chat APP</Typography>
              <Typography
                variant={"subtitle2"}
                component={Link}
                to="https://www.youtube.com/"
                color={theme.palette.primary.main}
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant={"body2"}
              component={"span"}
              sx={{
                color: theme.palette.text,
                fontWeight: 400,
              }}
            >
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MenuItems />
    </Stack>
  );
};

const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography
              variant={"body2"}
              component={"span"}
              sx={{
                color: theme.palette.text,
                fontWeight: 400,
              }}
            >
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{
              color: el.incoming ? theme.palette.text : "#fff",
              fontWeight: 400,
            }}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      <MenuItems />
    </Stack>
  );
};

const MediaMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: "210px", borderRadius: "10px" }}
          />
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{
              color: el.incoming ? theme.palette.text : "#fff",
              fontWeight: 400,
            }}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MenuItems />
    </Stack>
  );
};

const TextMsg = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
      alignItems={"center"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant={"body2"}
          component={"span"}
          sx={{
            color: el.incoming ? theme.palette.text : "#fff",
            fontWeight: 400,
          }}
        >
          {el.message}
        </Typography>
      </Box>
      <MenuItems />
    </Stack>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const MenuItems = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        size={20}
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{ cursor: "pointer" }}
      />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack spacing={1} p={1}>
          {Message_options.map((el, index) => {
            return (
              <MenuItem
                key={index}
                onClick={handleClose}
                sx={{ fontSize: "14px", fontWeight: 500 }}
              >
                {el.title}
              </MenuItem>
            );
          })}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
