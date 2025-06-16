import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./authThunk";

interface UserSlice {
  isLogin: boolean;
  id: string;
  email: string;
}

const initialState: UserSlice = {
  isLogin: false,
  id: "",
  email: "",
};

export const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },

    deleteAuth: (state) => {
      state.isLogin = false;
      state.id = "";
      state.email = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
    });
  },
});

export const { setAuth, deleteAuth } = userSlice.actions;
