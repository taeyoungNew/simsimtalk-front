import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const NavSearchInput = () => {
  return (
    <Box
      sx={{
        padding: "0.1rem 1rem",
        backgroundColor: (theme) => theme.palette.background.default,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "500px",
      }}
    >
      <SearchIcon
        sx={{
          color: (theme) => theme.palette.fontColor.icon,
          fontSize: "1.5rem",
        }}
      ></SearchIcon>

      <Input
        disableUnderline
        sx={{
          borderBottomColor: "none",
          width: "20rem",
          fontSize: "0.8rem",
          color: (theme) => theme.palette.fontColor.main,
        }}
      ></Input>
    </Box>
  );
};
