import Box from "@mui/material/Box";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router-dom";
import { MyFollowings } from "../components/common/myFollowings";

export const Applayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box
        sx={{
          display: "grid",
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
        <MyFollowings></MyFollowings>
        <Outlet />
        <Box>test3</Box>
      </Box>
    </>
  );
};
