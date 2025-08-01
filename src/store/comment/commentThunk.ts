import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createCommentAPI,
  deleteCommentAPI,
  modifyCommentAPI,
} from "../../apis/comment";
import { updateCommentCnt } from "../post/allPostsSlice";

interface CreateComment {
  postId: number;
  comment: string;
}

interface ReturnComment {
  id: number;
  postId: number;
  userId: string;
  userNickname: string;
  content: string;
  createAt: string;
}

interface ModifyComment {
  id: number;
  postId: number;
  content: string;
}

interface DeleteComment {
  id: number;
  postId: number;
}

export const createCommentThunk = createAsyncThunk(
  "comment/createComment",
  async (payload: CreateComment, { dispatch }) => {
    const result = await createCommentAPI(payload);

    dispatch(updateCommentCnt({ postId: payload.postId, delta: 1 }));
    return result as ReturnComment;
  },
);

export const modifyCommentThunk = createAsyncThunk(
  "comment/modifyComment",
  async (data: ModifyComment) => {
    const result = await modifyCommentAPI(data);
    return result as ReturnComment;
  },
);

export const deleteCommentThunk = createAsyncThunk(
  "comment/deleteComment",
  async (payload: DeleteComment) => {
    await deleteCommentAPI(payload);
    return payload as DeleteComment;
  },
);
