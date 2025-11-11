import { createAsyncThunk } from "@reduxjs/toolkit";
import { followingAPI, followingCencelAPI } from "../../apis/follow";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export const followingThunk = createAsyncThunk<
  { followingId: string },
  string,
  { rejectValue: Error }
>("follow/following", async (followingId, thunkAPI) => {
  try {
    await followingAPI(followingId);
    return { followingId };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const followingCencelThunk = createAsyncThunk<
  { followingCencelId: string },
  string,
  { rejectValue: Error }
>("follow/followingCencel", async (followingCencelId, thunkAPI) => {
  try {
    await followingCencelAPI(followingCencelId);
    return { followingCencelId };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
