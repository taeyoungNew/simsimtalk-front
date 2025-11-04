import axios from "axios";

export const postLike = async (postId: number) => {
  console.log(`${import.meta.env.VITE_API_BASE}post-like/${postId}`);

  return await axios.post(
    `${import.meta.env.VITE_API_BASE}post-Like/${postId}`,
    {},
    { withCredentials: true },
  );
};

export const postLikeCencel = async (postId: number) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_BASE}post-Like/${postId}`,
    { withCredentials: true },
  );
};
