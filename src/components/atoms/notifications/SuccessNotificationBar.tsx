import { Box, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

interface props {
  successMessage: string | undefined;
}

export const SuccessNotification = ({ successMessage }: props) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.success.main,
        color: (theme) => theme.palette.background.paper,
        padding: "4px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CheckCircleOutlineOutlinedIcon></CheckCircleOutlineOutlinedIcon>
      <Typography>{successMessage}</Typography>
    </Box>
  );
};
