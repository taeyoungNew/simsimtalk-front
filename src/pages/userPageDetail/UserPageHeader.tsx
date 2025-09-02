import { Box, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { CustomAvatar } from "../../assets/icons/Avatar";

export const UserPageHeader = () => {
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
            <Typography sx={{ fontSize: "1.5rem" }}>닉네임</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};
