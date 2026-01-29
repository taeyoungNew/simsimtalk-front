import { getSocket } from ".";

export const getMsgAlarmsSocket = () => {
  const socket = getSocket();
  console.log("나의 getMsgAlarms가져오기");

  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("getMsgAlarms", null, (res: any) => {
    if (!res.ok) {
      getMsgAlarmsSocket();
      return;
    }
  });
};

export const msgAlarmsRead = (chatRoomId: string) => {
  const socket = getSocket();

  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("msgAlarmsRead", { chatRoomId });
};
