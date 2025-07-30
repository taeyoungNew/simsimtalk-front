import { Box } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
interface CommentsCardProps {
  commentId: number;
  userId: string;
  userNickname: string;
  content: string;
}
export const CommentCard = ({
  commentId,
  userId,
  userNickname,
  content,
}: CommentsCardProps) => {
  return (
    <>
      <Box>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={content}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  {userNickname}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider sx={{ width: "80%" }} variant="inset" component="li" />
      </Box>
    </>
  );
};
