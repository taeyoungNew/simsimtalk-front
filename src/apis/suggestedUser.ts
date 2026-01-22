import axios from "./axios";
export const getSuggestedUserAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}suggested-user`, {
    withCredentials: true,
  });
};
