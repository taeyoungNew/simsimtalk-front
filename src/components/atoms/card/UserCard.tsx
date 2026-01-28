import { Box, Button, Typography } from "@mui/material";
import { CustomAvatar } from "../../../assets/icons/Avatar";
import { theme } from "../../../theme/theme";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../store/hook";
import {
  followingCencelThunk,
  followingThunk,
} from "../../../store/follow/followThunk";
import { useSelector } from "react-redux";
import { selectUserProfileById } from "../../../store/user/usersEntitiesSelector";

interface UserInfo {
  userId: string;
  isFollowinged: boolean;
  nickname: string;
  followerCnt: number;
  mutualFriendsCount: number;
  sectionType: "suggest" | "popular";
}

export const UserCard = ({
  userId,
  isFollowinged,
  followerCnt,
  mutualFriendsCount,
  nickname,
  sectionType,
}: UserInfo) => {
  const dispatch = useAppDispatch();
  const prevPathName = location.pathname;
  const profileUrl = useSelector(selectUserProfileById(userId));
  const following = async () => {
    await dispatch(
      followingThunk({
        followId: userId,
        isMyPage: false,
        followingNickname: nickname,
      }),
    );
  };

  const followingCencel = async () => {
    await dispatch(
      followingCencelThunk({
        followId: userId,
        isMyPage: false,
        followingNickname: nickname,
      }),
    );
  };
  return (
    <NavLink
      style={{ textDecorationLine: "none" }}
      to={`/userPage/${userId}`}
      state={{ myPage: false, prevPathName }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: `0.4px solid ${theme.palette.userCardColor.border.border}`,
          padding: "1rem",
          borderRadius: "10px",
          width: "11rem",
          gap: 1,
          alignItems: "center",
          ":hover": {
            border: `0.4px solid ${theme.palette.userCardColor.border.hover}`,
          },
        }}
      >
        <CustomAvatar profileUrl={profileUrl} sx={{ width: "6rem" }} />
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
          {isFollowinged ? (
            <Button
              onClick={(e) => {
                e.preventDefault(); // NavLink 이동 방지
                e.stopPropagation(); // 이벤트 전파 차단
                followingCencel();
              }}
              sx={{
                width: "inherit",
                color: (theme) => theme.palette.fontColor.icon,
                background: (theme) => theme.palette.background.default,
              }}
            >
              팔로잉중
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault(); // NavLink 이동 방지
                e.stopPropagation(); // 이벤트 전파 차단
                following();
              }}
              sx={{
                width: "inherit",
                color: (theme) => theme.palette.background.paper,
                background: (theme) => theme.palette.userCardColor.button.bg,
              }}
            >
              팔로잉
            </Button>
          )}
        </Box>
      </Box>
    </NavLink>
  );
};
