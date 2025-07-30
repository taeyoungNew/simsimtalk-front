import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCommentAPI } from "../../apis/comment";
import { updateCommentCnt } from "../post/allPostsSlice";

interface CreateComment {
  postId: number;
  comment: string;
}

interface ReturnComment {
  commentId: number;
  postId: number;
  userId: string;
  userNickname: string;
  content: string;
  createAt: string;
}

export const createCommentThunk = createAsyncThunk(
  "comment/createComment",
  async (payload: CreateComment, { dispatch }) => {
    const result = await createCommentAPI(payload);
    console.log(result);

    dispatch(updateCommentCnt({ postId: payload.postId, delta: 1 }));
    return result as ReturnComment;
  },
);
