import axios from "axios";

export const followingAPI = async (followingId: string) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}follow/${followingId}`,
    {},
    { withCredentials: true },
  );
};

export const followingCencelAPI = async (followingCencelId: string) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_BASE}follow/${followingCencelId}`,
    { withCredentials: true },
  );
};
