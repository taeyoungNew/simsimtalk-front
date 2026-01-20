import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlarmsByUserAPI, markAlarmAPI } from "../../apis/alarm";
interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface Alarm {
  id: number;
  senderId: string;
  senderNickname: string;
  receiverId: string;
  targetId: number | string;
  targetType: "USER" | "POST" | "COMMENT" | "SYSTEM";
  alarmType: "FOLLOW" | "LIKE" | "COMMENT" | "SYSTEM";
  isRead: boolean;
  createdAt: string;
}

interface AddAlarmReq {
  id: number;
  senderId: string;
  senderNickname: string;
  receiverId: string;
  targetId: number | string;
  targetType: "USER" | "POST" | "COMMENT" | "SYSTEM";
  alarmType: "FOLLOW" | "LIKE" | "COMMENT" | "SYSTEM";
  isRead: boolean;
  createdAt: string;
}

interface AddAlarmRes {
  id: number;
  senderId: string;
  senderNickname: string;
  receiverId: string;
  targetId: number | string;
  targetType: "USER" | "POST" | "COMMENT" | "SYSTEM";
  alarmType: "FOLLOW" | "LIKE" | "COMMENT" | "SYSTEM";
  isRead: boolean;
  createdAt: string;
}
interface GetAllAlarmByUserRes {
  alarms: Alarm[];
}

interface MarkAlarmReq {
  alarmId: number;
}
interface MarkAlarmRes {
  alarmId: number;
  userId: string;
}

export const getAlarmThunk = createAsyncThunk<
  AddAlarmRes,
  AddAlarmReq,
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

export const getAllAlarmByUserThunk = createAsyncThunk<
  Alarm[],
  void,
  { rejectValue: Error }
>("alarm/getAllAlarm", async (_, thunkAPI) => {
  try {
    const result = await getAlarmsByUserAPI();

    return result.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const markAlarmThunk = createAsyncThunk<
  MarkAlarmRes,
  MarkAlarmReq,
  { rejectValue: Error }
>("alarm/markAlarm", async ({ alarmId }, thunkAPI) => {
  try {
    const result = await markAlarmAPI(alarmId);
    return { alarmId, userId: result.data.userId };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
