import { Box, Typography } from "@mui/material";
import { AvatarMenu } from "./AvatarMenu";
import { EllipsisText } from "../atoms/text/EllipsisText";
import { truncateText } from "../../utils/truncateText";
import { CustomAvatar } from "../../assets/icons/Avatar";
import { theme } from "../../theme/theme";
import { chatThunk } from "../../store/chat/chatThunk";
import { useAppDispatch } from "../../store/hook";

interface ChatRoomCardProps {
  chatRoomId: string;
  targetUserId: string;
  targetUserEmail: string;
  targetUserNickname: string;
  lastMessagePreview: string;
  lastMessageType: "TEXT" | "IMAGE" | "FILE" | "SYSTEM";
  lastMessageAt: string;
}

export const ChatRoomCard = ({
  chatRoomId,
  lastMessageAt,
  lastMessagePreview,
  lastMessageType,
  targetUserEmail,
  targetUserId,
  targetUserNickname,
}: ChatRoomCardProps) => {
  const dispatch = useAppDispatch();
  const openChatWindow = async (e: { currentTarget: HTMLElement }) => {
    // setAnchorEl(null);

    setTimeout(() => {
      dispatch(chatThunk({ targetUserId, targetUserNickname }));
    }, 0);
  };
  return (
    <Box
      component={"div"}
      onClick={openChatWindow}
      sx={{
        border: `0.4px solid ${theme.palette.fontColor.assist}`,
        borderRadius: "5px",
        padding: "0.2rem",
        cursor: "pointer",
        display: "flex",
        gap: 1,
        alignItems: "center",
        ":hover": {},
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CustomAvatar sx={{ width: "1.8rem" }} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          {targetUserNickname}
        </Typography>

        <Typography
          sx={{ fontSize: "0.8rem", color: theme.palette.fontColor.assist }}
        >
          {truncateText(lastMessagePreview, 10)}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "0.7rem" }}>방금</Typography>
        <Typography sx={{ fontSize: "0.7rem" }}>3</Typography>
      </Box>
    </Box>
  );
};
