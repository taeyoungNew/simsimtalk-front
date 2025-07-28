import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const PostDetailHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <NavLink to={"/"}>
            <Button>Back</Button>
          </NavLink>
        </Box>
        <Box>
          <Button>수정</Button>
          <Button>삭제</Button>
        </Box>
      </Box>
    </>
  );
};
