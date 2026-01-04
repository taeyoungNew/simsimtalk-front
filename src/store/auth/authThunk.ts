import { createAsyncThunk } from "@reduxjs/toolkit";
import { authMeAPI, loginAPI, logoutAPI } from "../../apis/auth";
import {
  authenticatSeocket,
  loginSocket,
  logoutSocket,
} from "../../sockets/authSocket";
import { deleteAuth } from "./authSlice";
import { resetLiked } from "../post/allPostsSlice";

interface LoginReq {
  email: string;
  password: string;
}

interface AuthMeRes {
  isLogin: boolean;
  user: {
    id: string;
    email: string;
    nickname: string;
  };
}

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export const loginThunk = createAsyncThunk<
  {
    data: {
      id: string;
      email: string;
      nickname: string;
    };
    message: string;
  },
  LoginReq,
  {
    rejectValue: Error;
  }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const loginResult = await loginAPI({
      email,
      password,
    });
    thunkAPI.dispatch(resetLiked());
    loginSocket(loginResult.data.data.id);
    authenticatSeocket();
    return { message: loginResult.data.message, data: loginResult.data.data };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.data.status,
      message: error.response.data.message,
    });
  }
});

export const logoutThunk = createAsyncThunk<
  void,
  { userId: string },
  { rejectValue: Error }
>("auth/logout", async ({ userId }, thunkAPI) => {
  try {
    const res = await logoutAPI();

    thunkAPI.dispatch(resetLiked());
    thunkAPI.dispatch(deleteAuth());
    logoutSocket(userId);
    alert(res.data.message);
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.data.status,
      message: error.response.data.message,
    });
  }
});

export const authMeThunk = createAsyncThunk<
  AuthMeRes,
  void,
  { rejectValue: Error }
>("auth/auth-me", async (_, thunkAPI) => {
  try {
    const res = await authMeAPI();

    return {
      isLogin: res.data.isLogin,
      user: {
        id: res.data.user.id,
        email: res.data.user.email,
        nickname: res.data.user.nickname,
      },
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
