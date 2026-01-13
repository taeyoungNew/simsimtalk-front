import { Box, Typography } from "@mui/material";
import { ChatRoomCard } from "../molecules/ChatRoomCard";
import { useAppSelector } from "../../store/hook";
import { RootState } from "../../store";

export const MyChattingRooms = () => {
  const chatList = useAppSelector(
    (state: RootState) => state.ChatRoomSlice.chatList,
  );

  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "auto",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: "10px",
        padding: "0.8rem",
      }}
    >
      <Typography
        sx={{
          padding: "0.2rem",
          fontSize: "1rem",
          fontWeight: "Bold",
          marginBottom: "0.2rem",
        }}
      >
        my chatting rooms
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.8,
          maxHeight: "10rem",
          paddingRight: "0.5rem",
          overflow: "scroll",
        }}
      >
        {chatList.map((el, index) => {
          return (
            <ChatRoomCard
              key={index}
              chatRoomId={el.chatRoomId}
              targetUserId={el.targetUserId}
              targetUserEmail={el.targetUserEmail}
              targetUserNickname={el.targetUserNickname}
              lastMessagePreview={el.lastMessagePreview}
              lastMessageType={el.lastMessageType}
              lastMessageAt={el.lastMessageAt}
            />
          );
        })}
      </Box>
    </Box>
  );
};
