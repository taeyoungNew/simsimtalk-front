import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPostAPI, getPostsAPI } from "../../apis/Post";

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
  "post/",
  async (lastPostId: number) => {
    const res = await getPostsAPI(lastPostId);
    console.log(res);

    return res as GetPostsRes & IsLastIsLoading;
  },
);
export const createPostThunk = createAsyncThunk(
  "post/",
  async (createPostData: CreatePost) => {
    console.log("createPostData  = ", createPostData);
    await createPostAPI(createPostData);
  },
);
