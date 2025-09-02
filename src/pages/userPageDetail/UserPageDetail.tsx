import { Box } from "@mui/material";
import { UserPageBody } from "./UserPageBody";
import { UserPageHeader } from "./UserPageHeader";

export const UserPageDetail = () => {
  const path = location.pathname;

  return (
    <Box>
      <UserPageHeader></UserPageHeader>
      <UserPageBody></UserPageBody>
    </Box>
  );
};
