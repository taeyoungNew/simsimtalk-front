import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { forwardRef } from "react";

const ShareButtonFunc = styled(Button)(({ theme }) => ({
  maxWidth: "7rem",
  borderRadius: "10px",
  border: `1px solid  ${theme.palette.primary.main}`,
  color: `${theme.palette.primary.main}`,
  padding: "6px 16px",
  backgroundColor: theme.palette.background.paper,
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.background.paper}`,
  },
}));

export const ShareButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <ShareButtonFunc ref={ref} {...props} startIcon={<ShareOutlinedIcon />}>
        공유
      </ShareButtonFunc>
    );
  },
);

// export default function ShareButton() {
//   return (
//
//   );
// }
