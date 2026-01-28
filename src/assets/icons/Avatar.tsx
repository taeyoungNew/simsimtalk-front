import { styled, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface AvatarProps {
  isOnline?: boolean;
  profileUrl?: string;
}

export const CustomAvatar = styled(AccountCircleIcon, {
  shouldForwardProp: (prop) => prop !== "isOnline" && prop !== "profileUrl",
})<AvatarProps>(({ theme, isOnline, profileUrl }) => ({
  width: "inherit",
  height: "inherit",
  backgroundColor: profileUrl ? "transparent" : theme.palette.fontColor.icon,
  color: profileUrl ? "transparent" : theme.palette.background.paper,
  fontWeight: "bold",
  borderRadius: "50%",
  border: isOnline
    ? `2px solid ${theme.palette.User.online}`
    : `0.3px solid ${theme.palette.fontColor.icon}`,
  backgroundImage: profileUrl ? `url(${profileUrl})` : "none",
  backgroundSize: "cover",
  backgroundPosition: profileUrl ? "center 30%" : "center",
}));
