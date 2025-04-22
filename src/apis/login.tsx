import axios, { AxiosRequestConfig } from "axios";

interface LoginForm {
  email: string;
  password: string;
}

export const loginAPI = async (props: LoginForm) => {
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
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
