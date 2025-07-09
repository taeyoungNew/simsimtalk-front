import axios from "axios";

export const getPostsAPI = async () => {
  return await axios
    .get(`${import.meta.env.VITE_API_BASE}post/`, {
      withCredentials: true,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};
