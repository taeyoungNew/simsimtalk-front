import { Box } from "@mui/material";

interface ImageBubbleProps {
  fileUrl: string;
  fileName: string;
  isMyChat: boolean;
}

export const FileBubble = ({
  fileUrl,
  fileName,
  isMyChat,
}: ImageBubbleProps) => {
  // const fileName = decodeURIComponent(fileUrl.split("/").pop() ?? "");
  return (
    <Box
      sx={{
        maxWidth: "16rem",
        padding: "0.6rem",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        backgroundColor: "background.paper",
      }}
    >
      <Box sx={{ fontSize: "1.2rem" }}>📎</Box>

      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Box
          sx={{
            fontSize: "0.8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {fileName}
        </Box>

        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.7rem" }}
        >
          download
        </a>
      </Box>
    </Box>
  );
};
