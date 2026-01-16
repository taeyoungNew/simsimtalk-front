import axios from "./axios";
export const markAlarmAsReadByRoomAPI = async (chatRoomId: string) => {
  return await axios.put(
    `${import.meta.env.VITE_API_BASE}message-alarm/mark-message-alarms`,
    {
      chatRoomId,
    },
    { withCredentials: true },
  );
};
