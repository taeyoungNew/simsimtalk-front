import { io, Socket } from "socket.io-client";
import { setOnlineUsers } from "../store/onlineUsers/onlineUsersSlice";
import { AppDispath } from "../store";

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

  return socket;
};
