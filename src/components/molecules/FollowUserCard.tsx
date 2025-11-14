import { Box, Typography } from "@mui/material";
import { CustomAvatar } from "../../assets/icons/Avatar";
import { DynamicCustomButton } from "../atoms/buttons/DynamicCustomButton";
import { theme } from "../../theme/theme";

interface FollowUserCardProps {
  nickname: string;
  userId: string;
  isFollow: boolean;
}

export const FollowUserCard = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: "0.5rem",
        paddingY: "1.2rem",
        borderRadius: "5px",
        border: `1px solid #e2e8f0`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "0.4rem",
        }}
      >
        <CustomAvatar sx={{ width: "3rem" }} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          nickname
        </Typography>
        <Typography
          sx={{ color: theme.palette.fontColor.assist, fontSize: "0.7rem" }}
        >
          username
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <DynamicCustomButton
          color={theme.palette.primary.main}
          title={"팔로잉버튼"}
        />
      </Box>
    </Box>
  );
};
