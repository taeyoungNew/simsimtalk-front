import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
  isLogin: boolean;
  nickname: string;
}

const initialState: UserSlice = {
  isLogin: false,
  nickname: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.isLogin = true), (state.nickname = action.payload);
    },

    deleteUser: (state, action) => {
      (state.isLogin = false), (state.nickname = "");
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
