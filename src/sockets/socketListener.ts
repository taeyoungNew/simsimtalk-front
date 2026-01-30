import store from "../store/index";
import { socketEvents } from "../sockets/events/socketEvents";

import {
  loadingSlice,
  startLoading,
  stopLoading,
} from "../store/loading/loadingSlice";
import { setOnlineUsers } from "../store/onlineUsers/onlineUsersSlice";
import { addMessage, setMessagesByRoom } from "../store/message/messageSlice";
import { updateChatList } from "../store/chat/chatSlice";
import {
  addmessageAlarmThunk,
  clearalarmsByChatRoomThunk,
  getmessageAlarmThunk,
} from "../store/messageAlarm/messageAlarmThunk";
import { getAlarmThunk } from "../store/alarm/alarmThunk";

socketEvents.on("initSocket", () => {
  store.dispatch(startLoading());
});

socketEvents.on("socketReady", () => {
  store.dispatch(stopLoading());
});

socketEvents.on("onlineUsers", (params) => {
  store.dispatch(setOnlineUsers(params));
});

socketEvents.on("receiveMessage", (params) => {
  store.dispatch(addMessage(params));
  store.dispatch(updateChatList(params));
});

socketEvents.on("chatHistory", (params) => {
  store.dispatch(setMessagesByRoom(params));
});
socketEvents.on("emitAlarms", (params) => {
  store.dispatch(getmessageAlarmThunk(params));
});
socketEvents.on("msgAlarmsRead", (params) => {
  store.dispatch(clearalarmsByChatRoomThunk(params));
});

socketEvents.on("notifyMessageAlarm", (params) => {
  store.dispatch(addmessageAlarmThunk(params));
  store.dispatch(updateChatList(params));
});

socketEvents.on("sendAlarm", (params) => {
  store.dispatch(getAlarmThunk(params));
});
