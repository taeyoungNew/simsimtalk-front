import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";
import { AvatarMenu } from "../../molecules/AvatarMenu";
interface MessageAlramProps {
  chatRoomId: string;
  content: string;
  contentType: string;
  senderId: string;
  senderNickname: string;
}
const MessageAlramItem = forwardRef<HTMLInputElement, MessageAlramProps>(
  ({ chatRoomId, content, contentType, senderId, senderNickname }, ref) => {
    let type = "";
    switch (contentType) {
      case "TEXT":
        type = "TEXT";
        break;
      case "IMAGE":
        type = "image";
        break;
      case "FILE":
        type = "file";
        break;
    }
    const to = location.pathname;
    return (
      <Box
        sx={{
          display: "flex",
          padding: "0 0.3rem 0.3rem 0.3rem",
          gap: 0.3,
          height: "3.1rem",
          marginBottom: type === "TEXT" ? "1rem" : "",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <AvatarMenu
              sx={{ width: "1.8rem" }}
              id={0}
              userId={senderId}
              userNickname={senderNickname}
              isLiked={false}
              to={to}
            ></AvatarMenu>
          </Box>
          <Box></Box>
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
              {`${senderNickname}`}님이 {`${type}`}를 보냈습니다.
            </Typography>
          </Box>
          <Box>
            {type === "TEXT" ? (
              <Typography
                sx={{ fontSize: "0.9rem" }}
              >{`${content}`}</Typography>
            ) : (
              <Box />
            )}
          </Box>
        </Box>
      </Box>
    );
  },
);

export default MessageAlramItem;
