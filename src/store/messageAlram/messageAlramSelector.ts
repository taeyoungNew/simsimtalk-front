import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectUnreadAlramCnt = (state: RootState) =>
  Object.values(state.MessageAlramSlice.alarmsByRoom).reduce(
    (acc, alrams) => acc + alrams.length,
    0,
  );

export const selectUnreadAlrams = createSelector(
  (state: RootState) => state.MessageAlramSlice.alarmsByRoom,
  (el) => {
    return Object.values(el)
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  },
);

export const selectUnreadAlramCntByRoom =
  (chatRoomId: string) => (state: RootState) => {
    if (state.MessageAlramSlice.alarmsByRoom[`${chatRoomId}`]) {
      return state.MessageAlramSlice.alarmsByRoom[`${chatRoomId}`].length;
    }
    return 0;
  };
