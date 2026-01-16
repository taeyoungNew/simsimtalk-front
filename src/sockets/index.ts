import { io, Socket } from "socket.io-client";
import { setOnlineUsers } from "../store/onlineUsers/onlineUsersSlice";
import { AppDispath } from "../store";
import { addMessage, setMessagesByRoom } from "../store/message/messageSlice";
import {
  addmessageAlarmThunk,
  clearalarmsByChatRoomThunk,
  getmessageAlarmThunk,
} from "../store/messageAlarm/messageAlarmThunk";
import { getAlarmsocket } from "./alarmSocket";
import { updateChatList } from "../store/chat/chatSlice";

let socket: Socket | null = null;

export const getSocket = () => socket;

export const initSocket = (dispatch: AppDispath) => {
  if (!socket) {
    socket = io(`http://localhost:3001`, {
      withCredentials: true,
    });
  }

  socket.on("connection", (msg) => {
    console.log("initSocket");
    console.log(msg);
  });

  // 현재 로그인중인 유저의 리스트를 받기
  socket.on("onlineUsers", (params) => {
    dispatch(setOnlineUsers(params));
  });

  socket.on("receiveMessage", async (params) => {
    dispatch(addMessage(params));
    dispatch(updateChatList(params));
  });
  socket.on("chatHistory", async (params) => {
    dispatch(setMessagesByRoom(params));
  });
  socket.on("socketAuthenticated", async () => {
    getAlarmsocket();
  });
  socket.on("emitalarms", async (params) => {
    dispatch(getmessageAlarmThunk(params));
  });
  socket.on("alarmsRead", async (param) => {
    dispatch(clearalarmsByChatRoomThunk(param));
  });
  socket.on("notifymessageAlarm", async (params) => {
    dispatch(addmessageAlarmThunk(params));
    dispatch(updateChatList(params));
  });
  return socket;
};
export const reconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
  socket?.connect();
};
