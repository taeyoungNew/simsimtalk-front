import { createSlice } from "@reduxjs/toolkit";
import { authMeThunk, loginThunk } from "./authThunk";
import { useAppDispatch } from "../../store/hook";
import { resetLiked } from "../post/allPostsSlice";

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
  initialized: boolean;
}

const initialState: UserInitialState = {
  isLoading: false,
  isLogin: false,
  id: "",
  email: "",
  nickname: "",
  isLoginSuccess: false,
  initialized: false,
  error: {
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
        state.isLoading = true;
        state.isLoginSuccess = false;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLogin = true;
        state.isLoading = false;
        state.isLoginSuccess = true;
        state.id = action.payload?.data.id;
        state.email = action.payload?.data.email;
        state.nickname = action.payload?.data.nickname;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        const dispatch = useAppDispatch();
        dispatch(resetLiked());
        state.isLoading = false;
        state.error = action.payload as Error;
      })
      .addCase(authMeThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authMeThunk.fulfilled, (state, action) => {
        state.isLogin = action.payload.isLogin;
        state.isLoading = false;
        state.isLoginSuccess = action.payload.isLogin;
        state.nickname = action.payload.user.nickname;
        state.email = action.payload.user.email;
        state.id = action.payload.user.id;
        state.initialized = true;
      })
      .addCase(authMeThunk.rejected, (state, action) => {
        console.log("authMeThunk.rejected");

        state.error = action.payload as Error;
        state.isLoading = false;
        state.isLogin = false;
        state.isLoginSuccess = false;
        state.nickname = "";
        state.email = "";
        state.id = "";
        state.initialized = true;
      });
  },
});

export const { resetUserError, setAuth, deleteAuth, resetIsLoginSuccess } =
  userSlice.actions;
