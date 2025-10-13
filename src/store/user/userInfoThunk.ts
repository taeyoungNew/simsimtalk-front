import { createAsyncThunk } from "@reduxjs/toolkit";
import { editMyInfo, myInfoAPI } from "../../apis/user";

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
  email: string;
  followerCnt: number;
  followingCnt: number;
  postCnt: number;
  UserInfo: UserInfo;
}

export const myInfoThunk = createAsyncThunk<
  UserRes,
  void,
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
