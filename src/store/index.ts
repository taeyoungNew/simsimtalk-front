import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/authSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import { postSlice } from "./post/postSlice";

const store = configureStore({
  reducer: { User: userSlice.reducer, Post: postSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
