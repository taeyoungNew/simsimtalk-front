import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPostAPI, getPostsAPI } from "../../apis/post";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

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
interface Post {
  id: number;
  profileUrl: string;
  userId: string;
  content: string;
  userNickname: string;
  likeCnt: number;
  isLiked: boolean;
  commentCnt: number;
  Comments: Comment[];
}

interface IsLikedPostIds {
  isLikedPostIds: isLikedPostId[];
}

interface isLikedPostId {
  postId: number;
}

interface GetPostsRes {
  posts: Post[];
}

export const getPostsThunk = createAsyncThunk<
  GetPostsRes & IsLastIsLoading & IsLikedPostIds,
  number,
  {
    rejectValue: Error;
  }
>("post/getAllPosts", async (lastPostId, thunkAPI) => {
  try {
    const posts = await getPostsAPI(lastPostId);

    return posts.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.data.status,
      message: error.response.data.message,
    });
  }
});

export const createPostThunk = createAsyncThunk<
  Post,
  string,
  {
    rejectValue: Error;
  }
>("post/createPost", async (content, thunkAPI) => {
  try {
    const newPost = await createPostAPI(content);
    return newPost.data.data as Post;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
