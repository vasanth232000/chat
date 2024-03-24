import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
  DocMsg,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, index) => {
          switch (el.type) {
            case "divider":
              return <Timeline key={index} el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg key={index} el={el} />;
                case "doc":
                  return <DocMsg key={index} el={el} />;
                case "link":
                  return <LinkMsg key={index} el={el} />;
                case "reply":
                  return <ReplyMsg key={index} el={el} />;

                default:
                  return <TextMsg key={index} el={el} />;
              }
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
