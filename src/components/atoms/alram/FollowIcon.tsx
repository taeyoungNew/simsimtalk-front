import { Box, SxProps, Theme } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { theme } from "../../../theme/theme";

interface FollowIconProps {
  width: number;
  sx?: SxProps<Theme>;
}

export const FollowIcon = ({ width, sx }: FollowIconProps) => {
  return (
    <Box
      sx={{
        height: `${width * 1.7}rem`,
        width: `${width * 1.7}rem`,
        backgroundColor: theme.palette.alarmCardIconColor.followBg,
        borderRadius: "70%",
        padding: "0.3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        ...sx,
      }}
    >
      <PersonAddAltOutlinedIcon
        sx={{
          color: theme.palette.alarmCardIconColor.followIconColr,
          width: `${width}rem`,
        }}
      />
    </Box>
  );
};
