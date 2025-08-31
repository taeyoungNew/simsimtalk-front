import { Box, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

interface props {
  errorMessage: string | undefined;
}

export const ErrNotificationBar = ({ errorMessage }: props) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.error.main,
        color: (theme) => theme.palette.background.paper,
        padding: "4px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ErrorOutlineOutlinedIcon></ErrorOutlineOutlinedIcon>
      <Typography>{errorMessage}</Typography>
    </Box>
  );
};
