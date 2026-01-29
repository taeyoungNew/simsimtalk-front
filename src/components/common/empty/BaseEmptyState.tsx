import { Box, SxProps, Theme, Typography } from "@mui/material";
import { theme } from "../../../theme/theme";
interface BaseEmptyStateProp {
  icon?: React.ReactNode;
  title: string;
  description: string;
  titleSize: number;
  descriptionSize: number;
  sx?: SxProps<Theme>;
}
export const BaseEmptyState = ({
  icon,
  title,
  description,
  titleSize,
  descriptionSize,
  sx,
}: BaseEmptyStateProp) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.3,
        padding: "0.5rem 0",
        width: "100%",
        ...sx,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{ display: "flex", gap: 0.7, alignItems: "start" }}
      >
        {icon && <Box mb={1}>{icon}</Box>}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: theme.palette.fontColor.main,
              fontSize: `${titleSize}rem`,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: theme.palette.fontColor.icon,
              fontSize: `${descriptionSize}rem`,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
