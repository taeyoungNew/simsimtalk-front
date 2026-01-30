import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMyUnreadMessageAlramsAPI,
  markMsgAlarmAsReadByRoomAPI,
} from "../../apis/msgAlarm";
// import { msgAlarmsRead } from "../../sockets/alarmSocket";
interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface AddmessageAlarmReq {
  id: number;
  chatRoomId: string;
  senderId: string;
  senderNickname: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
  messageId: number;
  createdAt: string;
}

interface AddmessageAlarmRes {
  id: number;
  chatRoomId: string;
  senderId: string;
  senderNickname: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
  messageId: number;
  createdAt: string;
}

interface MessageArlam {
  id: number;
  chatRoomId: string;
  senderId: string;
  senderNickname: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
  messageId: number;
  createdAt: string;
}

interface GetmessageAlarm {
  getAlarms: MessageArlam[];
}

export const getmessageAlarmThunk = createAsyncThunk<
  GetmessageAlarm,
  GetmessageAlarm,
  { rejectValue: Error }
>("messageAlarm", async (params, thunkAPI) => {
  try {
    return { getAlarms: params.getAlarms };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const markAlarmAsReadByRoomThunk = createAsyncThunk<
  { chatRoomId: string },
  { chatRoomId: string },
  { rejectValue: Error }
>("messageAlarm/markAlarmAsReadByRoom", async ({ chatRoomId }, thunkAPI) => {
  try {
    const result = (await markMsgAlarmAsReadByRoomAPI(chatRoomId)).data;
    // msgAlarmsRead(chatRoomId);
    return { chatRoomId: result.chatRoomId };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});

export const addmessageAlarmThunk = createAsyncThunk<
  AddmessageAlarmReq,
  AddmessageAlarmRes,
  { rejectValue: Error }
>("messageAlarm/addalarm", async (param, thunkAPI) => {
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

export const clearalarmsByChatRoomThunk = createAsyncThunk<
  { chatRoomId: string },
  { chatRoomId: string },
  { rejectValue: Error }
>("messageAlarm/clearAlarmsByChatRoom", async ({ chatRoomId }, thunkAPI) => {
  try {
    return { chatRoomId };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
