import { createAsyncThunk } from "@reduxjs/toolkit";
import { authMeAPI, loginAPI } from "../../apis/auth";

interface LoginReq {
  email: string;
  password: string;
}

interface LoginRes {
  id: string;
  email: string;
  nickname: string;
}

interface AuthMeRes {
  isLogin: boolean;
  user: {
    id: string;
    email: string;
    nickname: string;
  };
}

export const loginThunk = createAsyncThunk<
  LoginRes,
  LoginReq,
  {
    rejectValue: string;
  }
>("auth/login", async ({ email, password }) => {
  const res = await loginAPI({
    email,
    password,
  });

  return res as unknown as LoginRes;
});

export const authMeThunk = createAsyncThunk("auth/auth-me", async () => {
  const res = await authMeAPI();
  console.log(res);

  return res as AuthMeRes;
});
