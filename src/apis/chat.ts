import axios from "axios";

export const createChatRoom = async (targetUserId: string) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}chat/create-chatroom`,
    {
      targetUserId,
    },
    {
      withCredentials: true,
    },
  );
};

export const getChatListAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}chat/get-chatlist`, {
    withCredentials: true,
  });
};
