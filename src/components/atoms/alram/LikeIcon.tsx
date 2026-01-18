import { Box, SxProps, Theme } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { theme } from "../../../theme/theme";

interface LikeIconProps {
  width: number;
  sx?: SxProps<Theme>;
}

export const LikeIcon = ({ width, sx }: LikeIconProps) => {
  return (
    <Box
      sx={{
        height: `${width * 1.7}rem`,
        width: `${width * 1.7}rem`,
        backgroundColor: theme.palette.alarmCardIconColor.likeBg,
        borderRadius: "70%",
        padding: "0.3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        ...sx,
      }}
    >
      <FavoriteBorderIcon
        sx={{
          color: theme.palette.alarmCardIconColor.likeIconColr,
          width: `${width}rem`,
        }}
      />
    </Box>
  );
};
