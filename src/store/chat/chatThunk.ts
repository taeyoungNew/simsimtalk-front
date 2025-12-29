import { createAsyncThunk } from "@reduxjs/toolkit";
import { createChatRoom } from "../../apis/chat";
import { joinChatRoom } from "../../sockets/chatSocket";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface CreateChatReq {
  targetUserId: string;
  targetUserNickname: string;
}
interface CreateChatRes {
  chatRoomId: string;
  targetUserNickname: string;
  isNew: boolean;
}

export const chatThunk = createAsyncThunk<
  CreateChatRes,
  CreateChatReq,
  { rejectValue: Error }
>(
  "chat/createChatRoom",
  async ({ targetUserId, targetUserNickname }, thunkAPI) => {
    try {
      const chatRoomResult = (await createChatRoom(targetUserId)).data;
      joinChatRoom(chatRoomResult.chatRoomId);
      return {
        targetUserNickname,
        chatRoomId: chatRoomResult.chatRoomId,
        isNew: chatRoomResult.isNew,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        errorCode: error.response.data.errorCode,
        status: error.response.data.status,
        message: error.response.data.message,
      });
    }
  },
);
