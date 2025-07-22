import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/authSlice";
import { createPostSlice, getAllPostsSlice } from "./post/postSlice";

const store = configureStore({
  reducer: {
    User: userSlice.reducer,
    GetAllPosts: getAllPostsSlice.reducer,
    CreatePost: createPostSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
