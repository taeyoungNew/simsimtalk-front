import axios from "axios";
export const getFollowinsAPI = async () => {
  return await axios.get(
    `${import.meta.env.VITE_API_BASE}user-relation/followings`,
    {
      withCredentials: true,
    },
  );
};

export const getFriendsAPI = async () => {
  return await axios.get(
    `${import.meta.env.VITE_API_BASE}user-relation/friends`,
    { withCredentials: true },
  );
};
