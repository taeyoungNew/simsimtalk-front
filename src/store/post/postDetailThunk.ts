import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostAPI } from "../../apis/Post";

interface Post {
  id: number;
  userId: string;
  title: string;
  content: string;
  userNickname: string;
  likeCnt: number;
  commentCnt: number;
  Comments: [{}];
}

interface DeletePostId {
  postId: Number;
}

export const getPostDetailThunk = createAsyncThunk(
  "post/getPostDetail",
  async (postId: number) => {
    const postDetail = await getPostAPI(postId);

    return postDetail as Post;
  },
);

export const deletePostThunk = createAsyncThunk(
  "post/deletePost",
  async (postId: Number) => {
    console.log("postId = ", postId);

    await getPostAPI(postId);
    return postId as unknown as DeletePostId;
  },
);
