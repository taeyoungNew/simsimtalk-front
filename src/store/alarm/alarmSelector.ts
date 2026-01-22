import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { alarmAdapter } from "./alarmSlice";

const alarmSelectors = alarmAdapter.getSelectors(
  (state: RootState) => state.AlarmSlice,
);

export const selectAlarmState = (state: RootState) => state.AlarmSlice;

export const selectAlarms = createSelector([selectAlarmState], (alarmState) =>
  alarmState.ids.map((id) => alarmState.entities[id]!),
);
export const selectUnreadAlarmCount = createSelector(
  alarmSelectors.selectAll,
  (alarms) => alarms.filter((alarm) => !alarm.isRead).length,
);
