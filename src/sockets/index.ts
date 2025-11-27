import { io, Socket } from "socket.io-client";
import { setOnlineUsers } from "../store/onlineUsers/onlineUsersSlice";
import { AppDispath } from "../store";

let socket: Socket | null = null;

export const getSocket = () => socket;

export const initSocket = (dispatch: AppDispath, id: string | null) => {
  if (!socket) {
    socket = io("http://localhost:3001");
  }

  socket.on("connection", (msg) => {
    console.log(msg);
  });

  socket.on("onlineUsers", (params) => {
    dispatch(setOnlineUsers(params));
  });

  return socket;
};
