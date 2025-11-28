import { useMemo } from "react";

export const checkOnline = (userId: string, onlineUsers: string[]) => {
  const onlineSet = useMemo(() => new Set(onlineUsers), [onlineUsers]);
  return onlineSet.has(userId);
};
