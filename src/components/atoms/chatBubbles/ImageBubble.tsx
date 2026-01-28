import { Box } from "@mui/material";

import ImageZoom from "../../common/ImageZoom";

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
        cursor: "pointer  ",
      }}
    >
      <ImageZoom src={imageUrl} />
    </Box>
  );
};
