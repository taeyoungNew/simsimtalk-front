import { RootState } from "..";

export const selectMessagesByRoom =
  (chatRoomId: string) => (state: RootState) =>
    state.MessageSlice.messagesByRoom[chatRoomId];
