import { createAsyncThunk } from "@reduxjs/toolkit";
interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface MessageReq {
  chatRoomId: string;
  senderId: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
}

interface MessageRes {
  chatRoomId: string;
  senderId: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
}

export const messageThunk = createAsyncThunk<
  MessageRes,
  MessageReq,
  { rejectValue: Error }
>("message", async (params, thunkAPI) => {
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
