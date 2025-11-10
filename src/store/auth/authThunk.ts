import { createAsyncThunk } from "@reduxjs/toolkit";
import { authMeAPI, loginAPI } from "../../apis/auth";

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
    console.log("로그인시도");

    const loginResult = await loginAPI({
      email,
      password,
    });

    return { message: loginResult.data.message, data: loginResult.data.data };
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
