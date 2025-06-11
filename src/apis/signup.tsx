import axios, { AxiosRequestConfig } from "axios";

interface SignupForm {
  email: string;
  password: string;
  username: string;
  nickname: string;
  aboutMe: string;
  age: number;
}

export const signupAPI = async (props: SignupForm) => {
  let result;
  await axios
    .post(`${import.meta.env.VITE_API_BASE}user/signup`, {
      email: props.email,
      password: props.password,
      username: props.username,
      nickname: props.nickname,
      aboutMe: props.aboutMe,
      age: props.age,
    })
    .then((response) => {
      result = response.status;
    })
    .catch((error) => {
      console.log(error.response);
      result = error.response.status;
    });
  return result;
};
