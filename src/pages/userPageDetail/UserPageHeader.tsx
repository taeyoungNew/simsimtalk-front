import { Box, Button, Typography } from "@mui/material";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import { CustomAvatar } from "../../assets/icons/Avatar";
import EditButton from "../../components/atoms/buttons/EditButton";
import { ShareButton } from "../../components/atoms/buttons/ShareButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { myInfoThunk, userInfoThunk } from "../../store/user/userInfoThunk";
import {
  followingCencelThunk,
  followingThunk,
} from "../../store/follow/followThunk";

interface HeaderProps {
  onViewContent: React.Dispatch<
    React.SetStateAction<
      "userPosts" | "userInfo" | "editUserInfo" | "followers" | "followings"
    >
  >;
  onEditClick: () => void;
  isMyPage: boolean;
  userId: string;
}

export const UserPageHeader = ({
  userId,
  isMyPage,
  onViewContent,
}: HeaderProps) => {
  const userInfo = useSelector((state: RootState) => state.UserInfo);
  const postCnt = useSelector((state: RootState) => state.UserInfo.postCnt);
  const dispatch = useAppDispatch();

  const following = async () => {
    await dispatch(
      followingThunk({
        followId: userId,
        isMyPage,
        followingNickname: userInfo.nickname,
      }),
    );
  };

  const followingCencel = async () => {
    await dispatch(
      followingCencelThunk({
        followId: userId,
        isMyPage,
        followingNickname: userInfo.nickname,
      }),
    );
  };

  useEffect(() => {
    if (isMyPage) {
      dispatch(myInfoThunk(userId));
    } else {
      dispatch(userInfoThunk(userId));
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        height: "18rem",
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column-reverse",
          position: "relative",
          borderRadius: "10px 10px 0 0",
          flex: 1,
          background: "linear-gradient(to right, #3b82f6, #9333ea)",
          minHeight: "30%",
        }}
      >
        <CustomAvatar
          sx={{
            width: "7.5rem",
            position: "absolute",
            translate: "-50% -50%",
            left: "10%",
            top: "95%",
            maxHeight: { xs: "3.5rem", md: "7.5rem" },
            maxWidth: { xs: "3.5rem", md: "7.5rem" },
          }}
        ></CustomAvatar>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 0.2 }}></Box>
          <Box sx={{ flex: 0.7 }}>
            <Typography sx={{ fontSize: "1.5rem" }}>
              {userInfo.nickname}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
              flex: 0.1,
            }}
          >
            <PhotoOutlinedIcon sx={{ fontSize: "2rem" }}></PhotoOutlinedIcon>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flex: 1,
        }}
      >
        <Box sx={{ flex: 0.2 }}></Box>
        <Box sx={{ display: "flex", flex: 0.8, flexDirection: "column" }}>
          <Box sx={{ display: "flex", flex: 1 }}>
            <Box
              sx={{
                flex: 0.8,
                width: "100%",
                maxHeight: "4.5rem",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  maxWidth: "20rem",
                  whiteSpace: "pre-wrap",
                  color: (theme) => theme.palette.fontColor.icon,
                }}
              >
                {userInfo.aboutMe}
              </Typography>
            </Box>

            {/* <Button>프로필변경</Button> */}
            <Box
              sx={{ justifyContent: "end", display: "flex", flex: 0.6, gap: 1 }}
            >
              {isMyPage === true ? (
                <Box>
                  <EditButton
                    onClick={() => {
                      if (isMyPage) onViewContent("editUserInfo");
                    }}
                  ></EditButton>
                </Box>
              ) : userInfo.isFollowinged ? (
                <Box>
                  <Button
                    sx={{
                      background: (theme) => theme.palette.background.default,
                      color: (theme) => theme.palette.fontColor.icon,
                    }}
                    onClick={() => followingCencel()}
                  >
                    팔로잉중
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Button
                    sx={{
                      background: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.background.paper,
                    }}
                    onClick={() => following()}
                  >
                    팔로잉
                  </Button>
                </Box>
              )}

              <Box>
                <ShareButton sx={{ width: "8rem" }}></ShareButton>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 2, display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 0.25,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography sx={{ fontSize: "1.4rem" }}>{postCnt}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography sx={{ fontSize: "0.8rem" }}>게시물</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 0.25,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography sx={{ fontSize: "1.4rem" }}>
                  {userInfo.followingCnt}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography sx={{ fontSize: "0.8rem" }}>팔로잉</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 0.25,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography sx={{ fontSize: "1.4rem" }}>
                  {userInfo.followerCnt}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography sx={{ fontSize: "0.8rem" }}>팔로워</Typography>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
