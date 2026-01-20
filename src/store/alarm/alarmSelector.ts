import { RootState } from "..";

export const selectAlarms = (state: RootState) =>
  state.AlarmSlice.ids.map((id) => state.AlarmSlice.entities[id]);

export const selectUnreadAlarmCount = (state: RootState) => {
  state.AlarmSlice.ids.forEach((el) => {
    console.log(state.AlarmSlice.entities[el]["isRead"]);
  });
  state.AlarmSlice.ids.filter((id) => !state.AlarmSlice.entities[id]["isRead"])
    .length;
};
