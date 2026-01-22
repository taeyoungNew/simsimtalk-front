import { getSocket } from ".";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
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
  socket?.emit("loginJoinOnlineRoom", { userId });
};

export const logoutSocket = (userId: string) => {
  const socket = getSocket();
  if (!socket?.connected) {
    socket?.connect();
  }

  socket?.emit("loginLeaveOnlineRoom", { userId });
};
