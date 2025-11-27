import { getSocket } from ".";

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
