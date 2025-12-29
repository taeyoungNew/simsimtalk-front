import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/authSlice";
import { getAllPostsSlice } from "./post/allPostsSlice";
import { getPostDetailSlice } from "./post/postDetailSlice";
import { signupSlice } from "./user/userSignupSlice";
import { getUserPostsSlice } from "./post/userPostsSlice";
import { userInfoSlice } from "./user/userInfoSlice";
import { onlineUsersSlice } from "./onlineUsers/onlineUsersSlice";
import { chatSlice } from "./chat/chatSlice";

const store = configureStore({
  reducer: {
    User: userSlice.reducer,
    GetUserPosts: getUserPostsSlice.reducer,
    Signup: signupSlice.reducer,
    GetAllPosts: getAllPostsSlice.reducer,
    GetPostDetail: getPostDetailSlice.reducer,
    UserInfo: userInfoSlice.reducer,
    OnlineUsersSlice: onlineUsersSlice.reducer,
    ChatRoomSlice: chatSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
