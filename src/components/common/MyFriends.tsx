import { Box, Typography } from "@mui/material";
import { FriendsCard } from "../molecules/FriendCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const MyFriends = () => {
  const friends = useSelector(
    (state: RootState) => state.UserRelationSlice.friends,
  );
  const onlineUsers = useSelector(
    (state: RootState) => state.OnlineUsersSlice.ids,
  );
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "auto",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: "10px",
        padding: "0.8rem",
        maxHeight: "10em",
        overflow: "hidden",
      }}
    >
      <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
        friends
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflow: "scroll",
          overflowY: "auto",
          scrollbarGutter: "stable",
          maxHeight: "inherit",
        }}
      >
        {friends.map((el, index) => {
          return (
            <FriendsCard
              key={index}
              friendId={el.friendId}
              email={el.email}
              nickname={el.nickname}
              chatRoomId={el.chatRoomId}
              profileUrl={el.profileUrl}
              onlineUsers={onlineUsers}
            />
          );
        })}
      </Box>
    </Box>
  );
};
