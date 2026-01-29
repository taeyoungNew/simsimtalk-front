import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme/theme";

interface EmptyStateProp {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const EmptyState = ({ icon, title, description }: EmptyStateProp) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.3,
        padding: "0.5rem 0.5rem",
        width: "100%",
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
              fontSize: "0.8rem",
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
              fontSize: "0.75rem",
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
