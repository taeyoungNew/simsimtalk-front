import { createSlice } from "@reduxjs/toolkit";

interface OnlineUsersSliceState {
  ids: string[];
}

const onlineUsersSliceState: OnlineUsersSliceState = {
  ids: [],
};

export const onlineUsersSlice = createSlice({
  name: "onlineUsers",
  initialState: onlineUsersSliceState,
  reducers: {
    setOnlineUsers: (state, action) => {
      state.ids = action.payload;
    },
  },
});

export const { setOnlineUsers } = onlineUsersSlice.actions;
export default onlineUsersSlice.reducer;
