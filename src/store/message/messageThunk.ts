import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadFile, uploadImage } from "../../apis/upload";
import { sendMessageEvent } from "../../sockets/chatSocket";
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

interface ImagOrFileUploadReq {
  file: File;
  chatRoomId: string;
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

export const fileUploadThunk = createAsyncThunk<
  void,
  ImagOrFileUploadReq,
  { rejectValue: Error }
>("message/file-upload", async ({ file, chatRoomId }) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("chatRoomId", chatRoomId);

  const result = await uploadFile(formData);

  sendMessageEvent(result.data);
});

export const imgageUploadThunk = createAsyncThunk<
  void,
  ImagOrFileUploadReq,
  { rejectValue: Error }
>("message/image-upload", async ({ file, chatRoomId }) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("chatRoomId", chatRoomId);

  const result = await uploadImage(formData);

  sendMessageEvent(result.data);
});
