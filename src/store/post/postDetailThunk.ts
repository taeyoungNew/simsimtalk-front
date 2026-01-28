import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletePostAPI, getPostAPI, modifyPostAPI } from "../../apis/post";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface GetPostDetail {
  postId: number;
  postUserId: string;
}

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
  profileUrl: string;
  userId: string;
  title: string;
  content: string;
  userNickname: string;
  likeCnt: number;
  isLiked: boolean;
  isFollowinged: boolean;
  commentCnt: number;
  Comments: Comment[];
}

interface ModifyPost {
  id: number;
  content: string;
}

export const getPostDetailThunk = createAsyncThunk<
  Post,
  GetPostDetail,
  {
    rejectValue: Error;
  }
>("post/getPostDetail", async ({ postId, postUserId }, thunkAPI) => {
  try {
    const postDetail = (await getPostAPI({ postId, postUserId })).data.data;
    return postDetail;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const modifyPostThunk = createAsyncThunk<
  Post,
  ModifyPost,
  {
    rejectValue: Error;
  }
>("post/modifyPost", async (payload, thunkAPI) => {
  try {
    const post = (await modifyPostAPI(payload)).data.data;
    return post;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const deletePostThunk = createAsyncThunk<
  number,
  number,
  {
    rejectValue: Error;
  }
>("post/deletePost", async (postId, thunkAPI) => {
  try {
    await deletePostAPI(postId);
    return postId;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
