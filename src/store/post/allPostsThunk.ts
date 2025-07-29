import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPostAPI, getPostsAPI } from "../../apis/post";
import { getAllPostsSlice } from "./allPostsSlice";

interface IsLastIsLoading {
  isLoading: boolean;
  isLast: boolean;
}
interface Posts {
  id: number;
  userId: string;
  title: string;
  content: string;
  userNickname: string;
  likeCnt: number;
  commentCnt: number;
  Comments: [{}];
}

interface GetPostsRes {
  posts: Posts[];
}

interface CreatePost {
  title: string;
  content: string;
}

export const getPostsThunk = createAsyncThunk(
  "post/getAllPosts",
  async (lastPostId: number) => {
    const posts = await getPostsAPI(lastPostId);
    return posts as GetPostsRes & IsLastIsLoading;
  },
);
export const createPostThunk = createAsyncThunk(
  "post/createPost",
  async (createPostData: CreatePost, { dispatch }) => {
    const newPost = await createPostAPI(createPostData);
    dispatch(getAllPostsSlice.actions.addPostToAllPosts(newPost));
    return newPost as Posts;
  },
);
