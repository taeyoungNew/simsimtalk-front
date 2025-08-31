import axios from "axios";

interface SignupData {
  email: string;
  password: string;
  username: string;
  nickname: string;
  aboutMe?: string;
  age?: number;
}

interface Error {
  status: number;
  errorCode: string;
  message: string;
}

export const signupAPI = async (props: SignupData) => {
  return await axios.post(`${import.meta.env.VITE_API_BASE}user/signup`, {
    email: props.email,
    password: props.password,
    username: props.username,
    nickname: props.nickname,
    aboutMe: props.aboutMe,
    age: props.age,
  });
};
