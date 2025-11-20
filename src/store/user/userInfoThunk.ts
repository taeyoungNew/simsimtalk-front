import { createAsyncThunk } from "@reduxjs/toolkit";
import { editMyInfo, myInfoAPI, userInfoAPI } from "../../apis/user";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface UserInfo {
  username: string;
  aboutMe: string;
  age: number;
  nickname: string;
}

interface FollowInfo {
  nickname: string;
  username: string;
}

interface Followers {
  id: string;
  UserInfo: FollowInfo;
}

interface Followings {
  id: string;
  UserInfo: FollowInfo;
}

interface editMyInfoReq {
  aboutMe: string;
  age: number;
  targetId: string;
  username: string;
}

interface editMyInfoRes {
  aboutMe: string;
  age: number;
  username: string;
  message: string;
}

interface UserRes {
  id: string;
  email: string;
  isFollowinged: boolean;
  followerCnt: number;
  followingCnt: number;
  postCnt: number;
  UserInfo: UserInfo;
  Followers: Followers[];
  Followings: Followings[];
  isFollowingedIds: string[];
}

export const myInfoThunk = createAsyncThunk<
  UserRes,
  string,
  { rejectValue: Error }
>("user/myInfo", async (_, thunkAPI) => {
  try {
    const getMyInfo = await myInfoAPI();

    return getMyInfo.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const userInfoThunk = createAsyncThunk<
  UserRes,
  string,
  { rejectValue: Error }
>("user/userInfo", async (userId, thunkAPI) => {
  try {
    const getUserInfoResult = await userInfoAPI(userId);
    const getUserInfo = getUserInfoResult.data.data;

    const payload: UserRes = {
      id: getUserInfo.id,
      email: getUserInfo.email,
      isFollowinged: getUserInfo.isFollowinged,
      followerCnt: getUserInfo.followerCnt,
      followingCnt: getUserInfo.followingCnt,
      postCnt: getUserInfo.postCnt,
      UserInfo: getUserInfo.UserInfo,
      Followers: getUserInfo.Followers,
      Followings: getUserInfo.Followings,
      isFollowingedIds: getUserInfoResult.data.isFollowingedIds,
    };
    return payload;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const editMyInfoThunk = createAsyncThunk<
  editMyInfoRes,
  editMyInfoReq,
  { rejectValue: Error }
>("user/editMyInfo", async (data, thunkAPI) => {
  try {
    const result = await editMyInfo(data);

    return {
      message: result.data.message,
      username: data.username,
      age: data.age,
      aboutMe: data.aboutMe,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
