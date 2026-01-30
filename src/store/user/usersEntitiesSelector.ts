import type { RootState } from "..";

export const selectUserProfileById = (userId: string) => (state: RootState) =>
  state.UsersEntitiesSlice.entities[userId]?.profileUrl;

export const selectUserBackgroundById =
  (userId: string) => (state: RootState) =>
    state.UsersEntitiesSlice.entities[userId]?.backgroundUrl;
