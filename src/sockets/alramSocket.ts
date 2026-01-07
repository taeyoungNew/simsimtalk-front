import { getSocket } from ".";

export const getAlramSocket = () => {
  const socket = getSocket();

  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("getAlrams", null, (res: any) => {
    if (!res.ok) {
      getAlramSocket();
      return;
    }
  });
};
