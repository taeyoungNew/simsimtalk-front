import { styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface AvatarProps {
  isOnline?: boolean;
}

export const CustomAvatar = styled(AccountCircleIcon, {
  shouldForwardProp: (prop) => prop !== "isOnline",
})<AvatarProps>(({ theme, isOnline }) => ({
  width: "inherit",
  height: "inherit",
  backgroundColor: theme.palette.fontColor.icon,
  color: theme.palette.background.paper,
  fontWeight: "bold",
  borderRadius: "70px",
  border: isOnline ? `2px solid ${theme.palette.User.online}` : "none",
}));
