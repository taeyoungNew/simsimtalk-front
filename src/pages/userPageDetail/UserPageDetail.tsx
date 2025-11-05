import { Box } from "@mui/material";
import { UserPageBody } from "./UserPageBody";
import { UserPageHeader } from "./UserPageHeader";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useLocation } from "react-router-dom";

export const UserPageDetail = () => {
  const [viewContent, setViewContent] = useState<
    "userPosts" | "userInfo" | "editUserInfo"
  >("userPosts");
  const [isEditProfile, setIsEditProfile] = useState(false);
  const path = location.pathname;

  const userId = path.toString().substring(10);
  const myId = useSelector((state: RootState) => state.User.id);
  let isMyPage = useLocation().state.myPage;

  let paramUserId;

  paramUserId = isMyPage ? myId : userId;

  return (
    <Box sx={{ display: "grid", gap: "0.5rem" }}>
      <UserPageHeader
        onViewContent={setViewContent}
        onEditClick={() => setIsEditProfile(true)}
        isMyPage={isMyPage}
        userId={paramUserId}
      ></UserPageHeader>
      <UserPageBody
        viewContent={viewContent}
        onViewContent={setViewContent}
        isMyPage={isMyPage}
        onEditClick={() => setIsEditProfile(false)}
        isEditProfile={isEditProfile}
        userId={paramUserId}
      ></UserPageBody>
    </Box>
  );
};
