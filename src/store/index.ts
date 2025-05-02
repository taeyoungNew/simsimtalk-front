import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
