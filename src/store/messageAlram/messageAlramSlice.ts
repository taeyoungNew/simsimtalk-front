import { createSlice } from "@reduxjs/toolkit";
import {
  addMessageAlramThunk,
  clearAlramsByChatRoomThunk,
  getMessageAlramThunk,
  markAlarmAsReadByRoomThunk,
} from "./messageAlramThunk";

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

interface MessageAlarm {
  id: number;
  chatRoomId: string;
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
      .addCase(addMessageAlramThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(addMessageAlramThunk.fulfilled, (state, action) => {
        const {
          id,
          chatRoomId,
          content,
          contentType,
          createdAt,
          messageId,
          senderId,
          senderNickname,
        } = action.payload;
        if (!state.alarmsByRoom[chatRoomId]) {
          state.alarmsByRoom[chatRoomId] = [];
        }
        state.alarmsByRoom[chatRoomId].push({
          content: content,
          id: id,
          chatRoomId: chatRoomId,
          senderId: senderId,
          senderNickname: senderNickname,
          contentType: contentType,
          messageId: messageId,
          createdAt: createdAt,
        });
        state.isLoading = false;
      })
      .addCase(addMessageAlramThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
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
              chatRoomId: el.chatRoomId,
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
      })

      .addCase(markAlarmAsReadByRoomThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(markAlarmAsReadByRoomThunk.fulfilled, (state, action) => {
        const chatRoomId = action.payload.chatRoomId;

        delete state.alarmsByRoom[chatRoomId];

        state.isLoading = false;
      })
      .addCase(markAlarmAsReadByRoomThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(clearAlramsByChatRoomThunk.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(clearAlramsByChatRoomThunk.fulfilled, (state, action) => {
        const chatRoomId = action.payload.chatRoomId;

        delete state.alarmsByRoom[chatRoomId];

        state.isLoading = false;
      })
      .addCase(clearAlramsByChatRoomThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addMessageAlarms } = messageAlramSlice.actions;
export default messageAlramSlice.reducer;
