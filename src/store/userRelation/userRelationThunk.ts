import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFollowinsAPI } from "../../apis/userRelation";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface FollowingUserInfoRes {
  id: string;
  nickname: string;
  profileUrl: string;
}

export const getFollowingsThunk = createAsyncThunk<
  FollowingUserInfoRes[],
  void,
  { rejectValue: Error }
>("userRelation/followings", async (_, thunkAPI) => {
  try {
    const result = await getFollowinsAPI();

    return result.data.rows;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
