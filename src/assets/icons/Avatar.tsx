import { styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const CustomAvatar = styled(AccountCircleIcon)(({ theme }) => ({
  width: "inherit",
  height: "inherit",
  backgroundColor: theme.palette.fontColor.icon,
  color: theme.palette.background.paper,
  fontWeight: "bold",
  borderRadius: "70px",
  border: "none",
}));
