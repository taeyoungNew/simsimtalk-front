import axios from "axios";

export const postLikeAPI = async (postId: number) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}post-Like/${postId}`,
    {},
    { withCredentials: true },
  );
};

export const postLikeCencelAPI = async (postId: number) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_BASE}post-Like/${postId}`,
    { withCredentials: true },
  );
};
