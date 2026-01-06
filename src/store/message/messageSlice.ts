import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageThunk } from "./messageThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export interface ChatMessage {
  id: number; // DB messageId (auto increment)
  chatRoomId: string;
  senderId: string;
  originalName: string;
  content: string;
  contentType: "TEXT" | "IMAGE" | "FILE" | "SYSTEM";
  createdAt: string; // ISO string
}

export interface ChatMessageState {
  isLoading: boolean;
  success: boolean;
  messagesByRoom: Record<string, ChatMessage[]>;
  error: null | Error;
}

const messageInitialState: ChatMessageState = {
  messagesByRoom: {},
  isLoading: false,
  success: false,
  error: {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const messageSlice = createSlice({
  name: "message",
  initialState: messageInitialState,
  reducers: {
    getChatMessageByRoom(state, action) {
      console.log(state.messagesByRoom);
    },
    setMessagesByRoom(
      state,
      action: PayloadAction<{
        chatRoomId: string;
        messages: ChatMessage[];
      }>,
    ) {
      state.messagesByRoom[action.payload.chatRoomId] = action.payload.messages;
    },

    addMessage: (state, action) => {
      const { chatRoomId, id } = action.payload;
      if (!state.messagesByRoom[chatRoomId]) {
        state.messagesByRoom[chatRoomId] = [];
      }

      state.messagesByRoom[chatRoomId].push(action.payload);
    },
    clearMessageByRoom(state, action) {
      delete state.messagesByRoom[action.payload.chatRoomId];
    },
  },
  extraReducers: async (builder) => {
    builder
      .addCase(messageThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(messageThunk.fulfilled, (state, _) => {
        state.isLoading = false;
      })
      .addCase(messageThunk.rejected, (state, _) => {
        state.isLoading = false;
      });
  },
});

export const { addMessage, setMessagesByRoom, clearMessageByRoom } =
  messageSlice.actions;
export default messageSlice.reducer;
