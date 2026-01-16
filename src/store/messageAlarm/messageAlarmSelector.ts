import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectUnreadalarmCnt = (state: RootState) =>
  Object.values(state.messageAlarmSlice.alarmsByRoom).reduce(
    (acc, alarms) => acc + alarms.length,
    0,
  );

export const selectUnreadalarms = createSelector(
  (state: RootState) => state.messageAlarmSlice.alarmsByRoom,
  (el) => {
    return Object.values(el)
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  },
);

export const selectUnreadalarmCntByRoom =
  (chatRoomId: string) => (state: RootState) => {
    if (state.messageAlarmSlice.alarmsByRoom[`${chatRoomId}`]) {
      return state.messageAlarmSlice.alarmsByRoom[`${chatRoomId}`].length;
    }
    return 0;
  };
