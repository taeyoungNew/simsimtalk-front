import Box from "@mui/material/Box";
import NavBar from "../components/molecules/NavBar";
import { Outlet } from "react-router-dom";
import { MyFollowings } from "../components/common/myFollowings";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Applayout = () => {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);

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
        {isLogin == true ? <MyFollowings></MyFollowings> : <Box></Box>}

        <Outlet />
        {isLogin == true ? <Box>test3</Box> : <Box></Box>}
      </Box>
    </>
  );
};
