import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostAPI } from "../../apis/Post";

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

export const getPostDetailThunk = createAsyncThunk(
  "post/getPostDetail",
  async (postId: number) => {
    const postDetail = await getPostAPI(postId);

    return postDetail as Posts;
  },
);
