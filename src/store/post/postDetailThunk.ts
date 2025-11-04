import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletePostAPI, getPostAPI, modifyPostAPI } from "../../apis/post";

interface Comment {
  id: number;
  postId: number;
  userId: string;
  userNickname: string;
  content: string;
  createAt: string;
}

interface Post {
  id: number;
  userId: string;
  title: string;
  content: string;
  userNickname: string;
  likeCnt: number;
  isLiked: boolean;
  commentCnt: number;
  Comments: Comment[];
}

interface ModifyPost {
  id: number;
  title: string;
  content: string;
}

export const getPostDetailThunk = createAsyncThunk(
  "post/getPostDetail",
  async (postId: number) => {
    const postDetail = await getPostAPI(postId);

    return postDetail as Post;
  },
);

export const modifyPostThunk = createAsyncThunk(
  "post/modifyPost",
  async (payload: ModifyPost) => {
    const post = await modifyPostAPI(payload);
    return post as Post;
  },
);

export const deletePostThunk = createAsyncThunk(
  "post/deletePost",
  async (postId: number) => {
    await deletePostAPI(postId);
    return postId as number;
  },
);
