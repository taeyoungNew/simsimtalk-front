import { createAsyncThunk } from "@reduxjs/toolkit";
import { authMeAPI, loginAPI } from "../../apis/Auth";

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
  id: string;
  email: string;
  nickname: string;
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
  return res as LoginRes;
});

export const authMeThunk = createAsyncThunk("auth/auth-me", async () => {
  const res = await authMeAPI();
  return res as AuthMeRes;
});
