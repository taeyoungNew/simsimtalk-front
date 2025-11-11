import { createSlice } from "@reduxjs/toolkit";
import { editMyInfoThunk, myInfoThunk, userInfoThunk } from "./userInfoThunk";
import { followingCencelThunk, followingThunk } from "../follow/followThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}
interface UserInfoInitialState {
  isLoading: boolean;
  success: boolean;
  successMessage: string;
  nickname: string;
  username: string;
  aboutMe: string;
  age: number;
  followerCnt: number;
  followingCnt: number;
  isFollowinged?: boolean;
  postCnt: number;
  error: null | Error;
}

const userInfoInitialState: UserInfoInitialState = {
  isLoading: false,
  success: false,
  successMessage: "",
  nickname: "",
  username: "",
  aboutMe: "",
  age: 0,
  followerCnt: 0,
  followingCnt: 0,
  isFollowinged: false,
  postCnt: 0,
  error: {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const userInfoSlice = createSlice({
  name: "user/myInfo",
  initialState: userInfoInitialState,
  reducers: {
    resetEditMyInfoError: (state) => {
      state.error = null;
    },
    resetInitMyInfo: (state) => {
      state.success = false;
      state.successMessage = "";
      state.error = null;
    },
  },

  extraReducers: async (builder) => {
    builder
      .addCase(myInfoThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(myInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nickname = action.payload?.UserInfo.nickname;
        state.username = action.payload?.UserInfo.username;
        state.aboutMe = action.payload?.UserInfo.aboutMe;
        state.age = action.payload?.UserInfo.age;
        state.followerCnt = action.payload?.followerCnt;
        state.followingCnt = action.payload?.followingCnt;
        state.postCnt = action.payload?.postCnt;
      })
      .addCase(myInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
    // 팔로잉
    builder
      .addCase(followingThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(followingThunk.fulfilled, (state) => {
        state.isFollowinged = true;
        state.isLoading = false;
        state.followerCnt += 1;
      })
      .addCase(followingThunk.rejected, (state) => {
        state.isLoading = false;
      });
    // 팔로잉 취소
    builder
      .addCase(followingCencelThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(followingCencelThunk.fulfilled, (state) => {
        state.isFollowinged = false;
        state.isLoading = false;
        state.followerCnt -= 1;
      })
      .addCase(followingCencelThunk.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(userInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nickname = action.payload?.UserInfo.nickname;
        state.username = action.payload?.UserInfo.username;
        state.aboutMe = action.payload?.UserInfo.aboutMe;
        state.age = action.payload?.UserInfo.age;
        state.isFollowinged = action.payload?.isFollowinged;
        state.followerCnt = action.payload.followerCnt;
        state.followingCnt = action.payload.followingCnt;
        state.postCnt = action.payload?.postCnt;
      })
      .addCase(userInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
    builder
      .addCase(editMyInfoThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editMyInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.successMessage = action.payload.message;
        state.username = action.payload?.username;
        state.aboutMe = action.payload?.aboutMe;
        state.age = action.payload?.age;
      })
      .addCase(editMyInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export const { resetEditMyInfoError, resetInitMyInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
