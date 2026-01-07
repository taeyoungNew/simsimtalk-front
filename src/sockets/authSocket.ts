import { getSocket } from ".";

export const authenticatSocket = () => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }
  socket?.emit("authenticate");
};

export const registerOnline = (userId: string) => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }
  socket?.emit("registerOnline", { userId });
};

export const loginSocket = (userId: string) => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("loginJoinOnlineRoom", { userId });
};

export const logoutSocket = (userId: string) => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("loginLeaveOnlineRoom", { userId });
};
