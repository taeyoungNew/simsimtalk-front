import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFollowinsAPI, getFriendsAPI } from "../../apis/userRelation";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface FollowingUserInfoRes {
  followingId: string;
  followingEmail: string;
  followingNickname: string;
  profileUrl: string;
}

interface FriendUserInfosRes {
  friendId: string;
  email: string;
  nickname: string;
  profileUrl: string;
  chatRoomId: string;
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

export const getFriendsThunk = createAsyncThunk<
  FriendUserInfosRes[],
  void,
  { rejectValue: Error }
>("userRelation/friends", async (_, thunkAPI) => {
  try {
    const friendInfos = await getFriendsAPI();

    return friendInfos.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
