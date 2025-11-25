import { initSocket } from ".";
("./index");

export const loginSocket = (userId: string) => {
  const socket = initSocket();
  if (!socket.connected) {
    socket.connect();
  }

  socket.emit("loginJoinOnlineRoom", { userId });
};

export const logoutSocket = (userId: string) => {
  const socket = initSocket();
  if (!socket.connected) {
    socket.connect();
  }

  socket.emit("loginLeaveOnlineRoom", { userId });
};
