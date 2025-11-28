import { Box } from "@mui/material";
import { theme } from "../../../theme/theme";

interface ChatBoxProps {
  content: string;
  isMyChat: boolean;
}

export const ChatBox = ({ content, isMyChat }: ChatBoxProps) => {
  return (
    <Box
      sx={{
        borderRadius: isMyChat ? "8px 8px 0 8px" : "8px 8px 8px 0",
        border: `0.8px solid ${theme.palette.fontColor.placeholder}`,
        maxWidth: "6rem",
        fontSize: "0.8rem",
        padding: "0.1rem",
        minHeight: "3rem",
        width: "5rem",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {content}
    </Box>
  );
};
