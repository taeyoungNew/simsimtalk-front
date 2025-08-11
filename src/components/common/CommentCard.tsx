import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  deleteCommentThunk,
  modifyCommentThunk,
} from "../../store/comment/commentThunk";
import { useAppDispatch } from "../../store/hook";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
interface CommentsCardProps {
  commentId: number;
  userId: string;
  userNickname: string;
  content: string;
  postId: number;
}

interface ModifyComment {
  content: string;
}

interface DeleteComment {
  id: number;
  postId: number;
}

export const CommentCard = ({
  commentId,
  userNickname,
  content,
  postId,
  userId,
}: CommentsCardProps) => {
  const [isOpenModifyComment, setOpenIsModifyComment] = useState(false);
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<ModifyComment>({
    defaultValues: {
      content: content,
    },
  });

  const myUserId = useSelector((state: RootState) => state.User.id);
  const isMyComment = myUserId === userId;

  const openModifyComment = () => {
    setOpenIsModifyComment(true);
  };
  const closeModifyComment = () => {
    setOpenIsModifyComment(false);
  };
  const modifyComment = async (data: ModifyComment) => {
    const payload = {
      id: commentId,
      postId,
      content: data.content,
    };
    await dispatch(modifyCommentThunk(payload));

    closeModifyComment();
  };

  const deleteComment = async ({ postId, id }: DeleteComment) => {
    console.log(commentId);
    const payload = {
      id,
      postId,
    };
    await dispatch(deleteCommentThunk(payload));
  };

  return (
    <>
      <Box>
        {isOpenModifyComment === true ? (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(modifyComment)();
              }}
              id={`modify-comment-form-${commentId}`}
              style={{ width: "100%" }}
            >
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    {...field}
                    onKeyDown={(e) => {
                      if (!e.shiftKey && e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit(modifyComment)();
                      }
                    }}
                  />
                )}
              />
            </form>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button type="submit" form={`modify-comment-form-${commentId}`}>
                <CheckCircleIcon></CheckCircleIcon>
              </Button>
              <Button type="button" onClick={closeModifyComment}>
                <CancelIcon></CancelIcon>
              </Button>
            </Box>
          </ListItem>
        ) : (
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
                    sx={{
                      fontSize: "0.8em",
                      color: "grey",
                      display: "inline",
                    }}
                  >
                    {userNickname}
                  </Typography>
                </React.Fragment>
              }
            />
            {isMyComment === true ? (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    openModifyComment();
                  }}
                >
                  <BorderColorIcon></BorderColorIcon>
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteComment({ postId, id: commentId });
                  }}
                >
                  <DeleteForeverIcon></DeleteForeverIcon>
                </Button>
              </Box>
            ) : (
              <Box></Box>
            )}
          </ListItem>
        )}

        <Divider sx={{ width: "80%" }} variant="inset" component="li" />
      </Box>
    </>
  );
};
