import { Box, Button, List, TextField, Typography } from "@mui/material";
import { HeartIcon } from "../../assets/icons/Heart";
import { theme } from "../../theme/theme";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";
import { CommentCard } from "../../components/common/CommentCard";

import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../store/hook";
import { createCommentThunk } from "../../store/comment/commentThunk";
import React from "react";

interface Comment {
  commentId: number;
  postId: number;
  userId: string;
  userNickname: string;
  content: string;
  createAt: string;
}

interface PostDetailFooterProps {
  postId: number;
  likeCnt: number;
  commentCnt: number;
  Comments: Comment[];
}
interface CommentsCardProps {
  commentId: number;
  userId: string;
  userNickname: string;
  content: string;
}

interface WriteComment {
  comment: string;
}

export const PostDetailFooter = ({
  likeCnt,
  commentCnt,
  postId,
}: PostDetailFooterProps) => {
  const dispatch = useAppDispatch();
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  const comments = useSelector(
    (state: RootState) => state.GetPostDetail.Comments,
  );
  const { control, handleSubmit, reset } = useForm<WriteComment>({
    defaultValues: { comment: "" },
  });
  const submitComment = async (data: WriteComment) => {
    const payload = {
      postId,
      comment: data.comment,
    };
    await dispatch(createCommentThunk(payload));

    reset({ comment: "" });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.4em",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button>
            <HeartIcon
              color={theme.palette.primary.contrastText}
              fillColor={theme.palette.primary.light}
              size={40}
            ></HeartIcon>
          </Button>
          <Typography
            color={theme.palette.primary.dark}
            sx={{ fontSize: "1.2em" }}
          >
            {likeCnt}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button>
            <ChatDuotone
              color={theme.palette.primary.dark}
              fillColor={theme.palette.primary.light}
              size={40}
            ></ChatDuotone>
          </Button>
          <Typography
            color={theme.palette.primary.dark}
            sx={{ fontSize: "1.2em" }}
          >
            {commentCnt}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%", padding: "0.5em" }}>
        {isLogin === true ? (
          <form onSubmit={handleSubmit(submitComment)}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Comment
              </Typography>
              <Controller
                name="comment"
                control={control}
                render={({ field }) => (
                  <TextField
                    multiline
                    placeholder="댓글을 남겨주세요"
                    minRows={1}
                    maxRows={3}
                    inputProps={{ maxLength: 200 }}
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    variant="outlined"
                    // value={commentInputValue}
                    onKeyDown={(e) => {
                      if (!e.shiftKey && e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit(submitComment)();
                      }
                    }}
                    {...field}
                  />
                )}
              />

              <Box
                sx={{
                  marginTop: "0.5em",
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
              </Box>
            </Box>
            <br />
          </form>
        ) : (
          <Box></Box>
        )}
        {comments.map((el, index) => {
          return (
            <List
              key={index}
              sx={{
                width: "auto",
                bgcolor: "background.paper",
                marginBottom: "0.5em",
              }}
            >
              <CommentCard
                key={el.commentId}
                commentId={el.commentId}
                userId={el.userId}
                userNickname={el.userNickname}
                content={el.content}
              ></CommentCard>
            </List>
          );
        })}
      </Box>
    </>
  );
};
