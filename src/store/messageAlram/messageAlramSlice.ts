import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMessageAlramThunk } from "./messageAlramThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface MessageAlarm {
  id: number;
  senderId: string;
  senderNickname: string;
  content: string;
  contentType: "TEXT" | "FILE" | "SYSTEM" | "IMAGE";
  messageId: number;
  createdAt: string;
}

interface MessageAlramState {
  isLoading: boolean;
  alarmsByRoom: Record<string, MessageAlarm[]>;
  error: null | Error;
}

const messageAlramInitialState: MessageAlramState = {
  isLoading: false,
  alarmsByRoom: {},
  error: {
    status: 0,
    errorCode: "",
    message: "",
  },
};

export const messageAlramSlice = createSlice({
  name: "messageAlram",
  initialState: messageAlramInitialState,
  reducers: {
    addMessageAlarms: (state, action) => {
      action.payload.forEach((alarm: any) => {
        const roomId = alarm.chatRoomId;

        if (!state.alarmsByRoom[roomId]) {
          state.alarmsByRoom[roomId] = [];
        }

        state.alarmsByRoom[roomId].push(alarm);
      });
    },
  },
  extraReducers: async (builder) => {
    builder
      .addCase(getMessageAlramThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getMessageAlramThunk.fulfilled, (state, action) => {
        const getAlrams = action.payload.getAlrams;
        if (getAlrams) {
          getAlrams.forEach((el) => {
            const roomId = el.chatRoomId;
            if (!state.alarmsByRoom[roomId]) {
              state.alarmsByRoom[roomId] = [];
            }
            state.alarmsByRoom[roomId].push({
              content: el.content,
              id: el.id,
              senderId: el.senderId,
              senderNickname: el.senderNickname,
              contentType: el.contentType,
              messageId: el.messageId,
              createdAt: el.createdAt,
            });
          });
        }

        state.isLoading = false;
      })
      .addCase(getMessageAlramThunk.rejected, (state, _) => {
        state.isLoading = false;
      });
  },
});

export const { addMessageAlarms } = messageAlramSlice.actions;
export default messageAlramSlice.reducer;
