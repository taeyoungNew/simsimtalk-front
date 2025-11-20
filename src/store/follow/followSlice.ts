import { createSlice } from "@reduxjs/toolkit";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface FollowInitialState {
  isFollowing: string[];
}

const followInitialState: FollowInitialState = {
  isFollowing: [],
};

export const followSlice = createSlice({
  name: "follow",
  initialState: followInitialState,
  reducers: {},

  extraReducers: async (builder) => {},
});
