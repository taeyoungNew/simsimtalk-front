import axios from "axios";

export interface LoginForm {
  email: string;
  password: string;
}

export const loginAPI = async (props: LoginForm) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}auth/login`,
    {
      email: props.email,
      password: props.password,
    },
    { withCredentials: true },
  );
};

export const logoutAPI = async () => {
  await axios
    .delete(`${import.meta.env.VITE_API_BASE}auth/logout`, {
      withCredentials: true,
    })
    .then((res) => {
      alert(res.data.message);
    })
    .catch(function (error) {
      throw error;
    });
};

export const authMeAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}auth/auth-me`, {
    withCredentials: true,
  });
};
