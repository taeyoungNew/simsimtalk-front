import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from "../store";

export const loginSocket = (socket: Socket) => {
  const userId = useSelector((state: RootState) => state.User.id);

  if (userId) socket.emit("loginJoinOnlineRoom", { userId });
};
