import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLike, postLikeCencel } from "../../apis/like";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export const postLikeThunk = createAsyncThunk<
  { postId: number },
  number,
  { rejectValue: Error }
>("like/post", async (postId, thunkAPI) => {
  try {
    await postLike(postId);

    return { postId: postId };   
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const postLikeCencelThunk = createAsyncThunk< 
  { postId: number },
  number,
  { rejectValue: Error }
  >("likecencel/post", async(postId, thunkAPI) =>{
    try {
      await postLikeCencel(postId);
      return {postId: postId}
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        errorCode: error.response.data.errorCode,
        status: error.response.status,
        message: error.response.data.message,
      });
    }
  });
