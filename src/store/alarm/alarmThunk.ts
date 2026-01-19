import { createAsyncThunk } from "@reduxjs/toolkit";
interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface AddAlarmReq {
  senderId: string;
  receiverId: string;
  targetId: number | string;
  targetType: "USER" | "POST" | "COMMENT" | "SYSTEM";
  alarmType: "FOLLOW" | "LIKE" | "COMMENT" | "SYSTEM";
  isRead: boolean;
}

interface AddAlarmRes {
  senderId: string;
  receiverId: string;
  targetId: number | string;
  targetType: "USER" | "POST" | "COMMENT" | "SYSTEM";
  alarmType: "FOLLOW" | "LIKE" | "COMMENT" | "SYSTEM";
  isRead: boolean;
}

export const getAlarmThunk = createAsyncThunk<
  AddAlarmReq,
  AddAlarmRes,
  { rejectValue: Error }
>("alarm", async (param, thunkAPI) => {
  try {
    return param;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
