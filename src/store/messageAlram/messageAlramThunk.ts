import { createAsyncThunk } from "@reduxjs/toolkit";
import { markAlarmAsReadByRoomAPI } from "../../apis/alram";
interface Error {
  status: number;
  errorCode: string;
  message: string;
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

interface GetMessageAlram {
  getAlrams: MessageArlam[];
}

export const getMessageAlramThunk = createAsyncThunk<
  GetMessageAlram,
  GetMessageAlram,
  { rejectValue: Error }
>("messageAlram", async (params, thunkAPI) => {
  try {
    return params;
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
>("messageAlram/markAlarmAsReadByRoom", async ({ chatRoomId }, thunkAPI) => {
  try {
    const result = (await markAlarmAsReadByRoomAPI(chatRoomId)).data;
    console.log(result);

    return { chatRoomId: result.chatRoomId };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      errorCode: error.response.data.errorCode,
      status: error.response.status,
      message: error.response.data.message,
    });
  }
});
