import Box from "@mui/material/Box";
import NavBar from "../components/molecules/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { MyFollowings } from "../components/common/myFollowings";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useAppDispatch } from "../store/hook";
import { useEffect } from "react";
import { resetUserError } from "../store/auth/authSlice";
import { resetSignupError } from "../store/user/userSignupSlice";
import { resetEditMyInfoError } from "../store/user/userInfoSlice";
import { ChatWindow } from "../components/molecules/ChatWindow";
import { ChatContainer } from "../components/organisms/chat/ChatContainer";
import { MyFriends } from "../components/common/MyFriends";
import { MyChattingRooms } from "../components/common/MyChattingRooms";

export const Applayout = () => {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const followingCnt = useSelector(
    (state: RootState) => state.UserRelationSlice.followins.length,
  );
  useEffect(() => {
    dispatch(resetUserError());
    dispatch(resetSignupError());
    dispatch(resetEditMyInfoError());
  }, [location]);

  return (
    <>
      <NavBar></NavBar>
      <Box
        sx={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1.4fr 7fr 2fr",
          maxWidth: {
            xs: "100%", // 모바일에서는 꽉 채우기
            sm: "600px", // 태블릿 세로
            md: "900px", // 태블릿 가로
            lg: "1200px", // 데스크탑
          },
          margin: "0 auto",
          p: 2,
        }}
      >
        {isLogin == true ? (
          <MyFollowings followingCnt={followingCnt}></MyFollowings>
        ) : (
          <Box></Box>
        )}

        <Box sx={{ minWidth: 0 }}>
          <Outlet />
        </Box>

        {isLogin == true ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <MyFriends />
            <MyChattingRooms />
          </Box>
        ) : (
          <Box></Box>
        )}
        <ChatContainer />
      </Box>
    </>
  );
};
