import { Box, Typography } from "@mui/material";

export const MyFollowings = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: "10px",
          padding: "0.8rem",
          maxHeight: "30rem",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "h2" }}>
          팔로잉
        </Typography>
      </Box>
    </>
  );
};
