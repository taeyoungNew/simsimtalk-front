import { createSlice } from "@reduxjs/toolkit";
import { authMeThunk, loginThunk } from "./authThunk";

interface UserSlice {
  isLogin: boolean;
  id: string;
  email: string;
  nickname: string;
  error: null | {
    status: number;
    errorCode: string;
    message: string;
  };
}

const initialState: UserSlice = {
  isLogin: false,
  id: "",
  email: "",
  nickname: "",
  error: null,
};

export const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    },

    deleteAuth: (state) => {
      state.isLogin = false;
      state.id = "";
      state.email = "";
      state.nickname = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    });

    builder.addCase(authMeThunk.fulfilled, (state, action) => {
      if (action.payload != undefined) {
        state.isLogin = action.payload?.isLogin;
        state.id = action.payload.user.id;
        state.email = action.payload.user.email;
        state.nickname = action.payload.user.nickname;
      }
    });
  },
});

export const { setAuth, deleteAuth } = userSlice.actions;
