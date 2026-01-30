import { io, Socket } from "socket.io-client";
// import { setOnlineUsers } from "../store/onlineUsers/onlineUsersSlice";
import { AppDispath } from "../store";
// import { addMessage, setMessagesByRoom } from "../store/message/messageSlice";
// import {
//   addmessageAlarmThunk,
//   clearalarmsByChatRoomThunk,
//   getmessageAlarmThunk,
// } from "../store/messageAlarm/messageAlarmThunk";
import { getMsgAlarmsSocket } from "./alarmSocket";
// import { updateChatList } from "../store/chat/chatSlice";
import { loginSocket } from "./authSocket";
// import { getAlarmThunk } from "../store/alarm/alarmThunk";
// import { startLoading, stopLoading } from "../store/loading/loadingSlice";
import { socketEvents } from "./events/socketEvents";

let socket: Socket | null = null;

export const getSocket = () => socket;

export const initSocket = (dispatch: AppDispath) => {
  if (!socket) {
    socketEvents.emit("initSocket");
    socket = io(`http://localhost:3001`, {
      withCredentials: true,
    });
  }

  socket.on("socket:ready", (msg) => {
    console.log(msg);
  });
  socket.on("socketReady", () => {
    socketEvents.emit("socketReady");
  });
  // 현재 로그인중인 유저의 리스트를 받기
  socket.on("onlineUsers", (params) => {
    socketEvents.emit("onlineUsers", params);
    // dispatch(setOnlineUsers(params));
  });

  socket.on("receiveMessage", async (params) => {
    socketEvents.emit("receiveMessage", params);
    // dispatch(addMessage(params));
    // dispatch(updateChatList(params));
  });
  socket.on("chatHistory", async (params) => {
    socketEvents.emit("chatHistory", params);
    // dispatch(setMessagesByRoom(params));
  });
  socket.on("socketAuthenticated", async () => {
    getMsgAlarmsSocket();
  });
  socket.on("emitAlarms", async (params) => {
    // dispatch(getmessageAlarmThunk(params));
    socketEvents.emit("emitAlarms", params);
  });
  socket.on("msgAlarmsRead", async (param) => {
    socketEvents.emit("msgAlarmsRead", param);
    // dispatch(clearalarmsByChatRoomThunk(param));
  });
  socket.on("notifyMessageAlarm", async (params) => {
    socketEvents.emit("notifyMessageAlarm", params);
    // dispatch(addmessageAlarmThunk(params));
    // dispatch(updateChatList(params));
  });
  socket.on("sendAlarm", async (params) => {
    socketEvents.emit("sendAlarm", params);
    // dispatch(getAlarmThunk(params));
  });
  return socket;
};
export const reconnectSocket = (userId: string) => {
  if (socket) {
    socket.disconnect();
  }
  socket?.connect();

  socket?.once("connect", () => {
    loginSocket(userId);
  });
};
