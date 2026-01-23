import { Box } from "@mui/material";
import { theme } from "../../theme/theme";
import { SuggestedUserSection } from "./SuggestedUserSection";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getSuggestedUserThunk } from "../../store/suggestedUser/suggestedUserThunk";

export const SuggestedFriendsPage = () => {
  const dispatch = useAppDispatch();
  const suggestedUsers = useAppSelector((state) => state.SuggestedUserSlice);
  const getSuggestedUsers = async () => {
    await dispatch(getSuggestedUserThunk());
  };
  useEffect(() => {
    getSuggestedUsers();
  }, []);
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
      <SuggestedUserSection
        key={1}
        suggestedUsers={suggestedUsers.mutual}
        sectionType={"suggest"}
      />
      <SuggestedUserSection
        key={2}
        suggestedUsers={suggestedUsers.popular}
        sectionType={"popular"}
      />
    </Box>
  );
};
