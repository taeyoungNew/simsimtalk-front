import { Box, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { ChatRoomCard } from "../molecules/ChatRoomCard";

export const MyChattingRooms = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "10rem",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: "10px",
        padding: "0.8rem",
        maxHeight: "20rem",
      }}
    >
      <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
        chattingrooms
      </Typography>
      <ChatRoomCard />
    </Box>
  );
};
