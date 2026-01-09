import { Box } from "@mui/material";
import { AvatarMenu } from "./AvatarMenu";

export const ChatRoomCard = () => {
  return (
    <Box sx={{ display: "flex", border: "0.5px solid black", gap: 1 }}>
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
        <Box>nickname</Box>
        <Box>message...</Box>
      </Box>
      <Box>
        <Box>방금</Box>
        <Box>3</Box>
      </Box>
    </Box>
  );
};
