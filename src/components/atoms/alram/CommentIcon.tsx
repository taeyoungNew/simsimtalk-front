import { Box, SxProps, Theme } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { theme } from "../../../theme/theme";

interface CommentIconProps {
  width: number;
  sx?: SxProps<Theme>;
}

export const CommentIcon = ({ width, sx }: CommentIconProps) => {
  return (
    <Box
      sx={{
        height: `${width * 1.7}rem`,
        width: `${width * 1.7}rem`,
        backgroundColor: theme.palette.alarmCardIconColor.commentBg,
        borderRadius: "70%",
        padding: "0.3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        ...sx,
      }}
    >
      <ChatBubbleOutlineIcon
        sx={{
          color: theme.palette.alarmCardIconColor.commentIconColr,
          width: `${width}rem`,
        }}
      />
    </Box>
  );
};
