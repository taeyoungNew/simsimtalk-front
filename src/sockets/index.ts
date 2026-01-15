import { io, Socket } from "socket.io-client";
import { setOnlineUsers } from "../store/onlineUsers/onlineUsersSlice";
import { AppDispath } from "../store";
import { addMessage, setMessagesByRoom } from "../store/message/messageSlice";
import {
  addMessageAlramThunk,
  clearAlramsByChatRoomThunk,
  getMessageAlramThunk,
} from "../store/messageAlram/messageAlramThunk";
import { getAlramSocket } from "./alramSocket";
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
    getAlramSocket();
  });
  socket.on("emitAlrams", async (params) => {
    dispatch(getMessageAlramThunk(params));
  });
  socket.on("alramsRead", async (param) => {
    dispatch(clearAlramsByChatRoomThunk(param));
  });
  socket.on("notifyMessageAlarm", async (params) => {
    dispatch(addMessageAlramThunk(params));
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
