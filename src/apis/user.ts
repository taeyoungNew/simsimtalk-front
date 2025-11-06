import axios from "axios";

interface editMyInfoReq {
  aboutMe: string;
  age: number;
  targetId: string;
  username: string;
}

// 나의 유저정보가져오기
export const myInfoAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}/user/my-info`, {
    withCredentials: true,
  });
};

export const userInfoAPI = async (userId: string) => {
  return await axios.get(
    `${import.meta.env.VITE_API_BASE}/user/user-info/${userId}`,
  );
};

export const editMyInfo = async (editMyInfo: editMyInfoReq) => {
  return await axios.put(
    `${import.meta.env.VITE_API_BASE}/user/${editMyInfo.targetId}`,
    {
      username: editMyInfo.username,
      age: editMyInfo.age,
      aboutMe: editMyInfo.aboutMe,
    },
    {
      withCredentials: true,
    },
  );
};
