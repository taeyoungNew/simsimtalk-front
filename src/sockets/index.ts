import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = () => {
  if (!socket) {
    socket = io("http://localhost:3001");
  }

  socket.on("welcome", (msg) => {
    console.log(msg);
  });
  return socket;
};
