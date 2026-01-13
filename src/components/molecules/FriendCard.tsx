import { Box, IconButton, Typography } from "@mui/material";
import { AvatarMenu } from "./AvatarMenu";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import { theme } from "../../theme/theme";

export const FriendsCard = () => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AvatarMenu
          sx={{ width: "2.5rem" }}
          id={0}
          userId={"aa"}
          userNickname={"wdas"}
          isLiked={false}
          to={"qd"}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          nickname
        </Typography>
        <Typography
          sx={{ fontSize: "0.6rem", color: theme.palette.fontColor.assist }}
        >
          test@test.com
        </Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "70px",
                backgroundColor: theme.palette.success.main,
              }}
            />
          </Box>
          <Typography
            sx={{ fontSize: "0.6rem", color: theme.palette.fontColor.assist }}
          >
            online
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: "auto",
          flexGrow: 1,
        }}
      >
        <IconButton sx={{ ml: "auto" }}>
          <ForumRoundedIcon
            sx={{
              color: theme.palette.fontColor.assist,
              fontSize: "1.2rem",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
