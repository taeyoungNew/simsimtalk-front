import { Box } from "@mui/material";
import { theme } from "../../theme/theme";
import { SuggestedUserSection } from "./SuggestedUserSection";

export const SuggestedFriendsPage = () => {
  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        height: "auto",
        maxWidth: "inherit",
        borderRadius: "10px",
      }}
    >
      <SuggestedUserSection sectionType={"suggest"} />
      <SuggestedUserSection sectionType={"popular"} />
    </Box>
  );
};
