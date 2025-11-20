import axios from "axios";
interface FollowReqType {
  followId: string;
  isMyPage: boolean;
}

export const followingAPI = async ({ followId, isMyPage }: FollowReqType) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}follow/${followId}`,
    { isMyPage },
    { withCredentials: true },
  );
};

export const followingCencelAPI = async ({
  followId,
  isMyPage,
}: FollowReqType) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_BASE}follow/${followId}`,
    { withCredentials: true, params: { isMyPage } },
  );
};
