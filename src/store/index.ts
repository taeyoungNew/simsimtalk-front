import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/authSlice";
import { createPostSlice, getAllPostsSlice } from "./post/allPostsSlice";
import { getPostDetailSlice } from "./post/PostDetailSlice";

const store = configureStore({
  reducer: {
    User: userSlice.reducer,
    GetAllPosts: getAllPostsSlice.reducer,
    CreatePost: createPostSlice.reducer,
    GetPostDetail: getPostDetailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
