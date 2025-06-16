import axios, { AxiosRequestConfig } from "axios";
import { useAppDispatch } from "../store/hook";

export interface LoginForm {
  email: string;
  password: string;
}

export const loginAPI = async (props: LoginForm) => {
  let result;
  await axios
    .post(
      `${import.meta.env.VITE_API_BASE}auth/login`,
      {
        email: props.email,
        password: props.password,
      },
      { withCredentials: true },
    )
    .then(function (response) {
      result = response.status;
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      result = error.response.status;
    });
  return result;
};

export const logoutAPI = async () => {
  await axios
    .delete(`${import.meta.env.VITE_API_BASE}auth/logout`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data.message);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
};

export const authMe = async () => {
  return await axios
    .get(`${import.meta.env.VITE_API_BASE}auth/auth-me`, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data.isLogin;
    })
    .catch((error) => {
      console.log(error.response.data.isLogin);
    });
};
