import { createAsyncThunk } from "@reduxjs/toolkit";
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
