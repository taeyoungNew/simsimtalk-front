import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsAPI } from "../../apis/Post";

interface GetPostsReq {
  // posts: any;
}

interface Posts {
  postId: number;
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

export const getPostsThunk = createAsyncThunk(
  // <
  //   GetPostsReq,
  //   GetPostsRes,
  //   {
  //     rejectValue: string;
  //   }
  // >
  "post/",
  async () => {
    const res = await getPostsAPI();
    return res as GetPostsRes;
  },
);
