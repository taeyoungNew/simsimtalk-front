import { createSlice } from "@reduxjs/toolkit";
import { getAlarmThunk } from "./alarmThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface Alarm {
  senderId: string;
  receiverId: string;
  targetId: number | string;
  targetType: "USER" | "POST" | "COMMENT" | "SYSTEM";
  alarmType: "FOLLOW" | "LIKE" | "COMMENT" | "SYSTEM";
  isRead: boolean;
}

interface AlarmState {
  isLoading: boolean;
  alaramsByUser: Alarm[];
  error: null | Error;
}

const alarmInitialState: AlarmState = {
  isLoading: false,
  alaramsByUser: [],
  error: null,
};

export const alarmSlice = createSlice({
  name: "alarm",
  initialState: alarmInitialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder
      .addCase(getAlarmThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAlarmThunk.fulfilled, (state, action) => {
        console.log(action.payload);

        state.alaramsByUser.push({
          ...action.payload,
        });
        state.isLoading = false;
      })
      .addCase(getAlarmThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default alarmSlice.reducer;
