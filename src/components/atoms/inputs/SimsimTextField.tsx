import { TextField } from "@mui/material";
import { styled } from "@mui/material";

export const SimSimTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.background.default,
  },
  "& label": {
    color: theme.palette.fontColor.icon, // 通常時のラベル色
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.fontColor.icon,
  },
}));
