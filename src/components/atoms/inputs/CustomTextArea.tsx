import { styled } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const CustomTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  borderRadius: 10,
  border: "none",
  resize: "none",
  outline: "none",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,

  padding: "12px 14px",
  fontSize: "14px",
  lineHeight: 1.5,

  "&::placeholder": {
    color: theme.palette.text.secondary,
  },
}));
