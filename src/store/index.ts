import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/authSlice";
import { getAllPostsSlice } from "./post/allPostsSlice";
import { getPostDetailSlice } from "./post/postDetailSlice";
import { signupSlice } from "./user/userSignupSlice";

const store = configureStore({
  reducer: {
    User: userSlice.reducer,
    Signup: signupSlice.reducer,
    GetAllPosts: getAllPostsSlice.reducer,
    GetPostDetail: getPostDetailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
