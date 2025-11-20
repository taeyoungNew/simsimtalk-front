import { createAsyncThunk } from "@reduxjs/toolkit";
import { followingAPI, followingCencelAPI } from "../../apis/follow";
import { RootState } from "..";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface FollowingUserInfo {
  myId: string;
  followId: string;
  isMyPage: boolean;
  nickname: string;
  username: string;
}

interface FollowType {
  followId: string;
  isMyPage: boolean;
}

export const followingThunk = createAsyncThunk<
  FollowingUserInfo,
  FollowType,
  { rejectValue: Error }
>("follow/following", async ({ followId, isMyPage }, thunkAPI) => {
  try {
    const followingUserInfo = (await followingAPI({ followId, isMyPage })).data
      .data;
    const state: RootState = thunkAPI.getState() as RootState;
    const myId = state.User.id;
    return {
      myId,
      followId,
      isMyPage,
      nickname: followingUserInfo.nickname,
      username: followingUserInfo.username,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const followingCencelThunk = createAsyncThunk<
  FollowingUserInfo,
  FollowType,
  { rejectValue: Error }
>("follow/followingCencel", async ({ followId, isMyPage }, thunkAPI) => {
  try {
    const followingUserInfo = (await followingCencelAPI({ followId, isMyPage }))
      .data.data;
    const state: RootState = thunkAPI.getState() as RootState;
    const myId = state.User.id;
    return {
      myId,
      followId,
      isMyPage,
      nickname: followingUserInfo.nickname,
      username: followingUserInfo.username,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
