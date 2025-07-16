import axios from "axios";

export const getPostsAPI = async (lastPostId: number) => {
  return await axios
    .get(`${import.meta.env.VITE_API_BASE}post?postLastId=${lastPostId}`, {
      withCredentials: true,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};
