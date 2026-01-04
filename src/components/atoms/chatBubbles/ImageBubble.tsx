import { Box } from "@mui/material";
import { theme } from "../../../theme/theme";
import as from "../../../assets/imgs/chat-quote.svg";

interface ImageBubbleProps {
  imageUrl: string;
  isMyChat: boolean;
}

export const ImageBubble = ({ imageUrl, isMyChat }: ImageBubbleProps) => {
  return (
    <Box
      sx={{
        borderRadius: isMyChat ? "8px 8px 0 8px" : "8px 8px 8px 0",
        overflow: "hidden",
        width: "7rem",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <img
        src={imageUrl}
        alt="chat-image"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};
