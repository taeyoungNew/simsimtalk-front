import { Box, Typography } from "@mui/material";
import { AvatarMenu } from "./AvatarMenu";

export const ChatRoomCard = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Box>
        <AvatarMenu
          sx={{ width: "1.9rem" }}
          id={0}
          userId={""}
          userNickname={""}
          isLiked={false}
          to={""}
        />
      </Box>
      <Box>
        <Typography sx={{ fontSize: "1rem" }}>nickname</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>message...</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "0.8rem" }}>방금</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>3</Typography>
      </Box>
    </Box>
  );
};
