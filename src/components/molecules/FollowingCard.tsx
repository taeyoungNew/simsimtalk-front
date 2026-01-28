import { Avatar, Box, Typography } from "@mui/material";
import { CustomAvatar } from "../../assets/icons/Avatar";
import { theme } from "../../theme/theme";
import { checkOnline } from "../../utils/checktOnline";
import { NavLink } from "react-router-dom";

interface FollowingProp {
  profileUrl: string;
  userId: string;
  nickname: string;
  onlineUsers: string[];
}
export const FollowinCard = ({
  profileUrl,
  userId,
  nickname,
  onlineUsers,
}: FollowingProp) => {
  const prevPathName = location.pathname;
  const isOnline = checkOnline(userId, onlineUsers);
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink
          style={{ textDecorationLine: "none" }}
          to={`/userPage/${userId}`}
          state={{ myPage: false, prevPathName }}
        >
          <CustomAvatar
            profileUrl={profileUrl}
            sx={{ width: "2rem", height: "2rem" }}
          />
        </NavLink>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          {nickname}
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
    </Box>
  );
};
