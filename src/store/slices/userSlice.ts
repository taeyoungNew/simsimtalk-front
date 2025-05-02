import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  nickname: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.isLogin = true), (state.nickname = action.payload.nickname);
    },

    deleteUser: (state, action) => {
      (state.isLogin = false), (state.nickname = "");
    },
  },
});

export const SetUser = userSlice.actions;
// export const
