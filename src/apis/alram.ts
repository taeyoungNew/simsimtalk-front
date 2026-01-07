import axios from "./axios";
export const markAlarmAsReadByRoomAPI = async (chatRoomId: string) => {
  return await axios.put(
    `${import.meta.env.VITE_API_BASE}message-alram/mark-message-alrams`,
    {
      chatRoomId,
    },
    { withCredentials: true },
  );
};
