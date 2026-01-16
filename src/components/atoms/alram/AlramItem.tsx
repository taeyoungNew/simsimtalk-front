import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";
import { AvatarMenu } from "../../molecules/AvatarMenu";
import { CustomAvatar } from "../../../assets/icons/Avatar";
import { theme } from "../../../theme/theme";
import { LikeIcon } from "./likeIcon";
import { FollowIcon } from "./FollowIcon";
import { CommentIcon } from "./CommentIcon";
interface messageAlarmProps {
  chatRoomId?: string;
  content?: string;
  contentType?: string;
  senderId?: string;
  senderNickname?: string;
}
const alarmItem = forwardRef<HTMLInputElement, messageAlarmProps>(
  ({ chatRoomId, content, contentType, senderId, senderNickname }, ref) => {
    let type = "";
    switch (contentType) {
      case "TEXT":
        type = "message";
        break;
      case "IMAGE":
        type = "image";
        break;
      case "FILE":
        type = "file";
        break;
    }
    const to = location.pathname;
    const alarmIcon = () => {
      switch (contentType) {
        case "like":
          return <LikeIcon width={1} />;
        case "follow":
          return <FollowIcon width={1} />;
        case "comment":
          return <CommentIcon width={1} />;
      }
    };
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          padding: "0 0.5rem",
          gap: 0.3,
          height: "3.5rem",
          marginBottom: type === "TEXT" ? "1rem" : "",
          cursor: "pointer",
          backgroundColor: theme.palette.chatCardColor.unreadBg,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "inherit",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{ display: "flex", gap: 0.7, alignItems: "start" }}
          >
            <CustomAvatar sx={{ width: "1.8rem" }} />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "0.8rem",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              닉네임{" "}
              <span style={{ color: `${theme.palette.fontColor.icon}` }}>
                님이 좋아요를 눌렀습니다.
              </span>
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>{alarmIcon()}</Box>
        </Box>
      </Box>
    );
  },
);

export default alarmItem;
