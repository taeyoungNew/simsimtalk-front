import { RootState } from "..";

export const selectUnreadAlramCnt = (state: RootState) =>
  Object.values(state.MessageAlramSlice.alarmsByRoom).reduce(
    (acc, alrams) => acc + alrams.length,
    0,
  );
