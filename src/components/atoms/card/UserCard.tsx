import { Box, Button, Typography } from "@mui/material";
import { CustomAvatar } from "../../../assets/icons/Avatar";
import { theme } from "../../../theme/theme";

interface UserInfo {
  userId: string;
  nickname: string;
  followerCnt: number;
  mutualFriendsCount: number;
  sectionType: "suggest" | "popular";
}

export const UserCard = ({
  userId,
  followerCnt,
  mutualFriendsCount,
  nickname,
  sectionType,
}: UserInfo) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "1rem",
        borderRadius: "10px",
        width: "11rem",
        gap: 1,
        alignItems: "center",
      }}
    >
      <CustomAvatar sx={{ width: "6rem" }} />
      <Typography
        sx={{
          color: theme.palette.userCardColor.text.title,
          fontSize: "1.3rem",
        }}
      >
        {nickname}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.8rem",
          color: theme.palette.userCardColor.text.assist,
        }}
      >
        {sectionType === "suggest"
          ? `함께아는 친구 ${mutualFriendsCount}명`
          : `팔로워 수 ${followerCnt}명`}
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Button
          sx={{
            width: "inherit",
            color: (theme) => theme.palette.background.paper,
            background: (theme) => theme.palette.userCardColor.button.bg,
          }}
        >
          팔로잉
        </Button>
      </Box>
    </Box>
  );
};
