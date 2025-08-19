import { styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const CustomAvatar = styled(AccountCircleIcon)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.fontColor.icon,
  fontWeight: "bold",
  borderRadius: "70px",
}));
