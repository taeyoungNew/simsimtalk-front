import { createSlice } from "@reduxjs/toolkit";
import { chatThunk } from "./chatThunk";

interface IsLastIsLoading {
  isLoading: boolean;
  errorMessage: string | undefined;
}
interface ChatRoomInfo {
  chatRoomId: string;
  targetUserNickname: string;
}

interface ChatInittialState {
  openedChatRooms: ChatRoomInfo[];
  activeChatRoomId: string | null;
}

const chatInittialState: IsLastIsLoading & ChatInittialState = {
  isLoading: false,
  errorMessage: "",
  openedChatRooms: [],
  activeChatRoomId: null,
};

export const chatSlice = createSlice({
  name: "chat/chatRooms",
  initialState: chatInittialState,
  reducers: {},

  extraReducers: async (builder) => {
    builder
      .addCase(chatThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(chatThunk.fulfilled, (state, action) => {
        const getChatRoomInfo = action.payload;

        const isOpendChatRoom = state.openedChatRooms.find(
          (el) => el.chatRoomId === getChatRoomInfo.chatRoomId,
        );

        if (!isOpendChatRoom) {
          state.openedChatRooms.push({
            targetUserNickname: getChatRoomInfo.targetUserNickname,
            chatRoomId: getChatRoomInfo.chatRoomId,
          });
        }
        state.activeChatRoomId = getChatRoomInfo.chatRoomId;
        state.isLoading = false;
      })
      .addCase(chatThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});
