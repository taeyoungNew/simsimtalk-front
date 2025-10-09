import { Box } from "@mui/material";
import { UserPageBody } from "./UserPageBody";
import { UserPageHeader } from "./UserPageHeader";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const UserPageDetail = () => {
  const [viewContent, setViewContent] = useState<
    "userPosts" | "userInfo" | "editUserInfo"
  >("userPosts");
  const [isEditProfile, setIsEditProfile] = useState(false);
  const path = location.pathname;
  const userId = path.toString().substring(10);
  const myId = useSelector((state: RootState) => state.User.id);
  let isMyPage = false;
  if (userId === myId) {
    isMyPage = true;
  }

  return (
    <Box sx={{ display: "grid", gap: "0.5rem" }}>
      <UserPageHeader
        onViewContent={setViewContent}
        onEditClick={() => setIsEditProfile(true)}
        isMyPage={isMyPage}
        userId={userId}
      ></UserPageHeader>
      <UserPageBody
        viewContent={viewContent}
        onViewContent={setViewContent}
        isMyPage={isMyPage}
        onEditClick={() => setIsEditProfile(false)}
        isEditProfile={isEditProfile}
      ></UserPageBody>
    </Box>
  );
};
