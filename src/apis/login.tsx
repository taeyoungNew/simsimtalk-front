import axios, { AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

interface LoginForm {
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
      console.log(error.response);
      result = error.response.status;
    });
  return result;
};

export const logoutAPI = async () => {
  await axios
    .delete(`${import.meta.env.VITE_API_BASE}auth/logput`)
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
};
