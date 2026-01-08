import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FollowinCard } from "../molecules/FollowingCard";

export const MyFollowings = () => {
  const followingList = useSelector(
    (state: RootState) => state.UserRelationSlice.followins,
  );
  const onlineUsers = useSelector(
    (state: RootState) => state.OnlineUsersSlice.ids,
  );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: "10px",
          padding: "0.8rem",
          maxHeight: "19rem",
        }}
      >
        <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
          followings
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {followingList.map((el) => {
            return (
              <FollowinCard
                userId={el.id}
                nickname={el.nickname}
                onlineUsers={onlineUsers}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};
