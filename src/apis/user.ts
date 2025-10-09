import axios from "axios";

interface editMyInfoReq {
  aboutMe: string;
  age: number;
  targetId: string;
  username: string;
}

export const myInfoAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}/user/myinfo`, {
    withCredentials: true,
  });
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
