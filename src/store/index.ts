import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/authSlice";
import { getAllPostsSlice } from "./post/allPostsSlice";
import { getPostDetailSlice } from "./post/postDetailSlice";
import { signupSlice } from "./user/userSignupSlice";
import { getUserPostsSlice } from "./post/userPostsSlice";
import { userInfoSlice } from "./user/userInfoSlice";
import { onlineUsersSlice } from "./onlineUsers/onlineUsersSlice";
import { chatSlice } from "./chat/chatSlice";
import { messageSlice } from "./message/messageSlice";
import { messageAlarmSlice } from "./messageAlarm/messageAlarmSlice";
import { userRelationSlice } from "./userRelation/userRelationSlice";
import { alarmSlice } from "./alarm/alarmSlice";
import { suggestedUserSlice } from "./suggestedUser/suggestedUserSlice";
import { usersEntitiesSlice } from "./user/usersEntitiesSlice";
import { loadingSlice } from "./loading/loadingSlice";

const store = configureStore({
  reducer: {
    User: userSlice.reducer,
    UserInfo: userInfoSlice.reducer,
    UserRelationSlice: userRelationSlice.reducer,
    GetPostDetail: getPostDetailSlice.reducer,
    GetAllPosts: getAllPostsSlice.reducer,
    GetUserPosts: getUserPostsSlice.reducer,
    Signup: signupSlice.reducer,
    messageAlarmSlice: messageAlarmSlice.reducer,
    OnlineUsersSlice: onlineUsersSlice.reducer,
    ChatRoomSlice: chatSlice.reducer,
    MessageSlice: messageSlice.reducer,
    SuggestedUserSlice: suggestedUserSlice.reducer,
    AlarmSlice: alarmSlice.reducer,
    LoadingSlice: loadingSlice.reducer,
    UsersEntitiesSlice: usersEntitiesSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
