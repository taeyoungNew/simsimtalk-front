import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../apis/Auth";

interface LoginReq {
  email: string;
  password: string;
}

interface LoginRes {
  id: string;
  email: string;
}

export const loginThunk = createAsyncThunk<
  LoginRes,
  { id: string; email: string }
>("auth/login", async (payload) => {
  const res = await loginAPI({
    email: payload.email,
    password: payload.password,
  });

  return res;
});
