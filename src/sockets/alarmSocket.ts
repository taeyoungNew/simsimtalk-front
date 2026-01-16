import { getSocket } from ".";

export const getAlarmsocket = () => {
  const socket = getSocket();

  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("getAlarms", null, (res: any) => {
    if (!res.ok) {
      getAlarmsocket();
      return;
    }
  });
};

export const alarmsRead = (chatRoomId: string) => {
  const socket = getSocket();

  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("alarmsRead", { chatRoomId });
};
