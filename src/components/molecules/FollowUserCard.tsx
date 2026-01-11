import { Box, Typography } from "@mui/material";
import { CustomAvatar } from "../../assets/icons/Avatar";
import { DynamicCustomButton } from "../atoms/buttons/DynamicCustomButton";
import { theme } from "../../theme/theme";
import {
  followingCencelThunk,
  followingThunk,
} from "../../store/follow/followThunk";
import { useAppDispatch } from "../../store/hook";
import { useEffect } from "react";

interface FollowUserCardProps {
  id: string;
  isMyPage: boolean;
  nickname: string;
  username?: string;
  isFollowing?: boolean;
  myId?: string;
}

export const FollowUserCard = ({
  id,
  nickname,
  username,
  isFollowing,
  isMyPage,
  myId,
}: FollowUserCardProps) => {
  const dispatch = useAppDispatch();

  const following = async () => {
    await dispatch(
      followingThunk({
        followId: id,
        isMyPage,
        followingNickname: nickname,
      }),
    );
  };

  const followingCencel = async () => {
    await dispatch(
      followingCencelThunk({
        followId: id,
        isMyPage,
        followingNickname: nickname,
      }),
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: "0.5rem",
        paddingY: "1.2rem",
        borderRadius: "5px",
        border: `1px solid #e2e8f0`,
        marginBottom: "0.5rem",
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
          {nickname}
        </Typography>
        <Typography
          sx={{ color: theme.palette.fontColor.assist, fontSize: "0.7rem" }}
        >
          {username}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {id === myId ? (
          <Box />
        ) : isFollowing ? (
          <DynamicCustomButton
            backgroundColor={`${theme.palette.background.default}`}
            color={theme.palette.fontColor.icon}
            title={"팔로잉중"}
            onClick={() => followingCencel()}
          />
        ) : (
          <DynamicCustomButton
            backgroundColor={`${theme.palette.primary.main}`}
            color={theme.palette.background.paper}
            title={"팔로잉"}
            onClick={() => following()}
          />
        )}
      </Box>
      {/* {isMyPage ? (
      ) : (
        <Box />
      )} */}
    </Box>
  );
};
