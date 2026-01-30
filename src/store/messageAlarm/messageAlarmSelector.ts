import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";

export const selectUnreadMsgAlarmCnt = (state: RootState) =>
  Object.values(state.messageAlarmSlice.alarmsByRoom).reduce(
    (acc, alarms) => acc + alarms.length,
    0,
  );

export const selectUnreadMsgAlarms = createSelector(
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

export const selectUnreadMsgAlarmCntByRoom =
  (chatRoomId: string) => (state: RootState) => {
    if (state.messageAlarmSlice.alarmsByRoom[`${chatRoomId}`]) {
      return state.messageAlarmSlice.alarmsByRoom[`${chatRoomId}`].length;
    }
    return 0;
  };
