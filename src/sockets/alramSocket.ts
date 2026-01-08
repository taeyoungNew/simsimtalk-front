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

export const alramsRead = (chatRoomId: string) => {
  const socket = getSocket();

  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("alramsRead", { chatRoomId });
};
