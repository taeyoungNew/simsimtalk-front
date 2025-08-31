import { createSlice } from "@reduxjs/toolkit";
import { authMeThunk, loginThunk } from "./authThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface UserInitialState {
  isLoading: boolean;
  isLogin: boolean;
  id: string;
  email: string;
  nickname: string;
  isLoginSuccess: boolean;
  error: null | Error;
}

const initialState: UserInitialState = {
  isLoading: false,
  isLogin: false,
  id: "",
  email: "",
  nickname: "",
  isLoginSuccess: false,
  error: null || {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    resetUserError: (state) => {
      state.error = null;
    },
    resetIsLoginSuccess: (state) => {
      state.isLoginSuccess = false;
    },
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
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = false;
        state.isLoginSuccess = false;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLogin = true;
        state.isLoginSuccess = true;
        state.id = action.payload?.data.id;
        state.email = action.payload?.data.email;
        state.nickname = action.payload?.data.nickname;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload as Error;
      });
  },
});

export const { resetUserError, setAuth, deleteAuth, resetIsLoginSuccess } =
  userSlice.actions;
