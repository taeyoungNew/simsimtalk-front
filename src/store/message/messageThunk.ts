import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadImage } from "../../apis/upload";
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

interface ImageUploadReq {
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

export const imgageUploadThunk = createAsyncThunk<
  void,
  ImageUploadReq,
  { rejectValue: Error }
>("message/image-upload", async ({ file, chatRoomId }) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("chatRoomId", chatRoomId);

  const result = await uploadImage(formData);

  sendMessageEvent(result.data);
});
