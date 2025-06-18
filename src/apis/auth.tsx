import axios from "axios";

export interface LoginForm {
  email: string;
  password: string;
}

export const loginAPI = async (props: LoginForm) => {
  let result;
  return await axios
    .post<{ id: string; email: string; nickname: string }>(
      `${import.meta.env.VITE_API_BASE}auth/login`,
      {
        email: props.email,
        password: props.password,
      },
      { withCredentials: true },
    )
    .then(function (response) {
      result = response.status;
      console.log(response.data);
      return {
        id: response.data.id,
        email: response.data.email,
        nickname: response.data.nickname,
      };
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      result = error.response.status;
    });
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

export const authMeAPI = async () => {
  return await axios
    .get(`${import.meta.env.VITE_API_BASE}auth/auth-me`, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error.response.data.isLogin);
    });
};
