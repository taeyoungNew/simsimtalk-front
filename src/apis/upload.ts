import axios from "axios";

export const uploadFile = async (formData: FormData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}upload/file`,
    formData,
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
