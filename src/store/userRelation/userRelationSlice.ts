import { createSlice } from "@reduxjs/toolkit";
import { getFollowingsThunk } from "./userRelationThunk";
import { followingCencelThunk, followingThunk } from "../follow/followThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface FollowingUserInfo {
  followingId: string;
  followingNickname: string;
  profileUrl: string;
}

interface FriendsInfo {
  id: string;
  nickname: string;
  profileUrl: string;
}

interface RecommendationsInfo {
  id: string;
  nickname: string;
  profileUrl: string;
}

interface UserRelationInitialState {
  isLoading: boolean;
  followins: FollowingUserInfo[];
  friends: FriendsInfo[];
  recommendationsInfo: RecommendationsInfo[];
  error: null | Error;
}

const userRelationInitialState: UserRelationInitialState = {
  isLoading: false,
  followins: [],
  friends: [],
  recommendationsInfo: [],
  error: {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const userRelationSlice = createSlice({
  name: "userRelation",
  initialState: userRelationInitialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder
      .addCase(getFollowingsThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getFollowingsThunk.fulfilled, (state, action) => {
        if (action.payload.length > 0) state.followins = action.payload;
        state.isLoading = false;
      })
      .addCase(getFollowingsThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(followingThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(followingThunk.fulfilled, (state, action) => {
        const { followId, followingNickname } = action.payload;
        state.followins.push({
          profileUrl: "",
          followingId: followId,
          followingNickname,
        });

        state.isLoading = false;
      })
      .addCase(followingThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(followingCencelThunk.pending, (state, _) => {
        state.isLoading = false;
      })
      .addCase(followingCencelThunk.fulfilled, (state, action) => {
        const { followId } = action.payload;
        state.followins = state.followins.filter(
          (el) => el.followingId !== followId,
        );
        state.isLoading = true;
      })
      .addCase(followingCencelThunk.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});
