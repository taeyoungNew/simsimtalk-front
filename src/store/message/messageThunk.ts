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
  targetUserId: string;
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
>("message/file-upload", async ({ file, chatRoomId, targetUserId }) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("chatRoomId", chatRoomId);

  const result = await uploadFile(formData);
  const payload = {
    chatRoomId: result.data.chatRoomId,
    content: result.data.content,
    targetUserId,
    originalName: result.data.originalName,
    contentType: result.data.contentType,
  };

  sendMessageEvent(payload);
});

export const imgUploadThunk = createAsyncThunk<
  void,
  ImagOrFileUploadReq,
  { rejectValue: Error }
>("message/image-upload", async ({ file, chatRoomId, targetUserId }) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("chatRoomId", chatRoomId);

  const result = await uploadImage(formData);
  const payload = {
    chatRoomId: result.data.chatRoomId,
    content: result.data.content,
    targetUserId,
    originalName: result.data.originalName,
    contentType: result.data.contentType,
  };
  sendMessageEvent(payload);
});
