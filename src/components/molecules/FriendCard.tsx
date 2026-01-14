import { Box, IconButton, Typography } from "@mui/material";
import { AvatarMenu } from "./AvatarMenu";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import { theme } from "../../theme/theme";
import { useAppDispatch } from "../../store/hook";
import { chatThunk } from "../../store/chat/chatThunk";
import { checkOnline } from "../../utils/checktOnline";

interface FriendsProps {
  friendId: string;
  email: string;
  nickname: string;
  chatRoomId: string;
  profileUrl: string;
  onlineUsers: string[];
}

export const FriendsCard = ({
  chatRoomId,
  email,
  friendId,
  nickname,
  profileUrl,
  onlineUsers,
}: FriendsProps) => {
  const dispatch = useAppDispatch();
  const isOnline = checkOnline(friendId, onlineUsers);
  const openChatWindow = async (e: { currentTarget: HTMLElement }) => {
    setTimeout(() => {
      dispatch(
        chatThunk({ targetUserId: friendId, targetUserNickname: nickname }),
      );
    }, 0);
  };
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AvatarMenu
          sx={{ width: "2.5rem" }}
          id={0}
          userId={"aa"}
          userNickname={"wdas"}
          isLiked={false}
          to={"qd"}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          {nickname}
        </Typography>
        <Typography
          sx={{ fontSize: "0.6rem", color: theme.palette.fontColor.assist }}
        >
          {email}
        </Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "70px",
                backgroundColor: isOnline
                  ? theme.palette.success.main
                  : theme.palette.error.main,
              }}
            />
          </Box>
          <Typography
            sx={{ fontSize: "0.7rem", color: theme.palette.fontColor.assist }}
          >
            {isOnline ? "online" : "offline"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: "auto",
          flexGrow: 1,
        }}
      >
        <IconButton onClick={openChatWindow} sx={{ ml: "auto" }}>
          <ForumRoundedIcon
            sx={{
              color: theme.palette.fontColor.assist,
              fontSize: "1.2rem",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
