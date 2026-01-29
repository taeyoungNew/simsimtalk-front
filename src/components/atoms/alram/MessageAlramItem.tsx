import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";
import { AvatarMenu } from "../../molecules/AvatarMenu";
import { CustomAvatar } from "../../../assets/icons/Avatar";
import { useSelector } from "react-redux";
import { selectUserProfileById } from "../../../store/user/usersEntitiesSelector";
import { theme } from "../../../theme/theme";
import { formatRelativeTime } from "../../../utils/formatRelativeTime";
import { useAppDispatch } from "../../../store/hook";
import { chatThunk } from "../../../store/chat/chatThunk";
interface MessageAlarmProps {
  chatRoomId: string;
  content: string;
  contentType: string;
  senderId: string;
  senderNickname: string;
  createdAt: string;
}
const MessageAlarmItem = forwardRef<HTMLInputElement, MessageAlarmProps>(
  (
    { chatRoomId, content, contentType, senderId, senderNickname, createdAt },
    ref,
  ) => {
    const dispatch = useAppDispatch();
    const openChatWindow = async (e: { currentTarget: HTMLElement }) => {
      setTimeout(() => {
        dispatch(
          chatThunk({
            targetUserId: senderId,
            targetUserNickname: senderNickname,
          }),
        );
      }, 0);
    };
    let type = "";
    switch (contentType) {
      case "TEXT":
        type = "message";
        break;
      case "IMAGE":
        type = "image";
        break;
      case "FILE":
        type = "file";
        break;
    }
    const profileUrl = useSelector(selectUserProfileById(senderId));
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          width: "inherit",
          cursor: "pointer",
        }}
      >
        <Box
          component={"div"}
          onClick={openChatWindow}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            padding: "0.5rem 0.5rem",
            gap: 0.7,
            height: "auto",
            maxHeight: "3.6rem",
            marginBottom: type === "TEXT" ? "1rem" : "",
            ":hover": {
              backgroundColor: `${theme.palette.chatCardColor.unreadBg}`,
            },
          }}
        >
          <CustomAvatar profileUrl={profileUrl} sx={{ width: "1.8rem" }} />
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
            }}
          >
            <Typography
              component="span"
              sx={{
                alignItems: "start",
                fontSize: "0.7rem",
                fontWeight: "bold",
                lineHeight: 1, // 핵심
                display: "block", // inline baseline 제거
                margin: 0, // 기본 여백 제거
                padding: 0,
                color: theme.palette.fontColor.icon,
              }}
            >
              <span
                style={{ color: theme.palette.fontColor.main }}
              >{`${senderNickname}`}</span>
              님이 {`${type}`}를 보냈습니다.
            </Typography>

            {type === "message" ? (
              <Typography
                sx={{ fontSize: "0.8rem", color: theme.palette.fontColor.main }}
              >{`${content}`}</Typography>
            ) : (
              <Box />
            )}
            <Typography
              sx={{
                color: theme.palette.chatCardColor.readMsg,
                fontSize: "0.6rem",
              }}
            >
              {formatRelativeTime(createdAt)}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  },
);

export default MessageAlarmItem;
