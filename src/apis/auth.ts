import axios from "./axios";

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
  return await axios.delete(`${import.meta.env.VITE_API_BASE}auth/logout`, {
    withCredentials: true,
  });
};

export const authMeAPI = async () => {
  console.log(`${import.meta.env.VITE_API_BASE}auth/auth-me`);

  return await axios.get(`${import.meta.env.VITE_API_BASE}auth/auth-me`, {
    withCredentials: true,
  });
};
