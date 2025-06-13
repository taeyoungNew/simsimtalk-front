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
  try {
    return await axios
      .post(`${import.meta.env.VITE_API_BASE}user/signup`, {
        email: props.email,
        password: props.password,
        username: props.username,
        nickname: props.nickname,
        aboutMe: props.aboutMe,
        age: props.age,
      })
      .then((response) => {
        console.log(response.data.message);
        return { status: response.status, message: response.data };
      })
      .catch((error) => {
        return {
          status: error.response.status,
          message: error.response.data.message,
        };
      });
  } catch (error) {
    console.log(error);
  }
};
