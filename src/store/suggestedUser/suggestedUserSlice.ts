import { createSlice } from "@reduxjs/toolkit";
import { getSuggestedUserThunk } from "./suggestedUserThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface UserInfo {
  userId: string;
  nickname: string;
  followerCnt: number;
  mutualFriendsCount: number;
}

interface getSuggestedUser {
  isLoading: boolean;
  mutual: UserInfo[];
  popular: UserInfo[];
  error: null | Error;
}

const suggestedUserInitialState: getSuggestedUser = {
  isLoading: false,
  mutual: [],
  popular: [],
  error: null,
};

export const suggestedUserSlice = createSlice({
  name: "suggestedUser",
  initialState: suggestedUserInitialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder
      .addCase(getSuggestedUserThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSuggestedUserThunk.fulfilled, (state, action) => {
        state.mutual = action.payload.mutual;
        state.popular = action.payload.popular;
        state.isLoading = false;
      })
      .addCase(getSuggestedUserThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
