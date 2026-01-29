import axios from "./axios";
export const markMsgAlarmAsReadByRoomAPI = async (chatRoomId: string) => {
  return await axios.put(
    `${import.meta.env.VITE_API_BASE}message-alarm/mark-message-alarms`,
    {
      chatRoomId,
    },
    { withCredentials: true },
  );
};

export const getMyUnreadMessageAlramsAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}message-alarm/`, {
    withCredentials: true,
  });
};
