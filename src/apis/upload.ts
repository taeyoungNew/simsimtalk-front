import axios from "axios";

interface uploadPayment {
  chatRoomId: string;
}

export const uploadFile = async () => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}message/upload-file`,
    {},
    { withCredentials: true },
  );
};

export const uploadImage = async (formData: FormData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}upload/image/`,
    formData,
    { withCredentials: true },
  );
};
