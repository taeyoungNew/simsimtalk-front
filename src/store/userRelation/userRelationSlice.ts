import { createSlice } from "@reduxjs/toolkit";
import { getFollowingsThunk } from "./userRelationThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface FollowingUserInfo {
  id: string;
  nickname: string;
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
        state.followins = action.payload;
        state.isLoading = false;
      })
      .addCase(getFollowingsThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
