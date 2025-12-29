import { createSlice } from "@reduxjs/toolkit";
import { messageThunk } from "./messageThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export interface ChatMessage {
  id: number; // DB messageId (auto increment)
  chatRoomId: string;
  senderId: number;
  content: string;
  messageType: "TEXT" | "IMAGE" | "FILE" | "EMOJI" | "SYSTEM";
  createdAt: string; // ISO string
}

export interface ChatMessageState {
  isLoading: boolean;
  success: boolean;
  messagesByRoom: {
    [chatRoomId: string]: ChatMessage[];
  };
  error: null | Error;
}

const messageInittialState: ChatMessageState = {
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
  initialState: messageInittialState,
  reducers: {
    selectMessagesByRoom: (state, action) => {
      const { chatRoomId } = action.payload;
      console.log(chatRoomId);
    },
    addMessage: (state, action) => {
      const { chatRoomId, id } = action.payload;
      if (!state.messagesByRoom[chatRoomId]) {
        state.messagesByRoom[chatRoomId] = [];
      }

      state.messagesByRoom[chatRoomId].push(action.payload);
    },
  },
  extraReducers: async (builder) => {
    builder
      .addCase(messageThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(messageThunk.fulfilled, (state, action) => {
        console.log("messageThunk = ", action.payload);

        state.isLoading = false;
      })
      .addCase(messageThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addMessage, selectMessagesByRoom } = messageSlice.actions;
export default messageSlice.reducer;
