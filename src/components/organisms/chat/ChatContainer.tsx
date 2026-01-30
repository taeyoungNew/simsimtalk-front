import { Box } from "@mui/material";
import { ChatWindow } from "../../molecules/ChatWindow";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

interface chatContainerProps {
  roomId: string;
  targetUserId: string;
  nickname: string;
}

export const ChatContainer = (
  {
    // roomId,
    // targetUserId,
    // nickname,
  },
) => {
  const opendChatRooms = useSelector(
    (state: RootState) => state.ChatRoomSlice.openedChatRooms,
  );
  const activeChatRoomId = useSelector(
    (state: RootState) => state.ChatRoomSlice.activeChatRoomId,
  );

  return (
    <Box
      sx={{
        position: "fixed",
        right: "5%",
        bottom: -5,
        display: "flex",
        alignItems: "flex-end",
        gap: "1%",
      }}
    >
      {opendChatRooms.map((el, index) => {
        const isActive = el.chatRoomId === activeChatRoomId;
        return (
          <ChatWindow
            key={index}
            chatRoomId={el.chatRoomId}
            targetUserNickname={el.targetUserNickname}
            targetUserId={el.targetUserId}
            targetUserProfile={""}
            isActive={isActive}
          />
        );
      })}
    </Box>
  );
};
