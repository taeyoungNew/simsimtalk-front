import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserPosts } from "../../apis/post";

interface IsLastIsLoading {
  isLoading: boolean;
  isLast: boolean;
}

interface Comment {
  id: number;
  postId: number;
  userId: string;
  userNickname: string;
  content: string;
  createAt: string;
}
interface Posts {
  id: number;
  userId: string;
  content: string;
  userNickname: string;
  likeCnt: number;
  commentCnt: number;
  Comments: Comment[];
}

interface GetUserPostsReq {
  userId: string;
  postLastId: null | number;
}

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface GetUserPostsRes {
  posts: Posts[];
}
export const getUserPostsThunk = createAsyncThunk<
  GetUserPostsRes,
  GetUserPostsReq,
  { rejectValue: Error }
>("post/userGetPosts", async (param, thunkAPI) => {
  try {
    const userPosts = await getUserPosts(param);

    return {
      posts: userPosts.data.userPosts,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
