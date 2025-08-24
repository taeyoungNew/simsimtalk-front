import { styled } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const CustomTextArea = styled(TextareaAutosize)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: "10px",
  width: "inherit",
  minHeight: "5rem",
  border: "0px",
  resize: "none",
  outline: "none",
}));
