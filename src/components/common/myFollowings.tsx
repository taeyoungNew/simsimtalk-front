import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FollowinCard } from "../molecules/FollowingCard";

interface MyFollowingsProps {
  followingCnt: number;
}

export const MyFollowings = ({ followingCnt }: MyFollowingsProps) => {
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
          maxWidth: "100%",
          height: followingCnt > 0 ? "10rem" : "5rem",
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: "10px",
          padding: "0.8rem",
          maxHeight: "20rem",
        }}
      >
        <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
          followings
        </Typography>
        {followingCnt > 0 ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {followingList.map((el, index) => {
              return (
                <FollowinCard
                  key={index}
                  userId={el.followingId}
                  nickname={el.followingNickname}
                  onlineUsers={onlineUsers}
                />
              );
            })}
          </Box>
        ) : (
          <Box>
            <Typography></Typography>
          </Box>
        )}
      </Box>
    </>
  );
};
