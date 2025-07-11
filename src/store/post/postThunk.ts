import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsAPI } from "../../apis/Post";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface GetPostsReq {
  // posts: any;
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

export const getPostsThunk = createAsyncThunk("post/", async () => {
  const res = await getPostsAPI();
  return res as GetPostsRes;
});
