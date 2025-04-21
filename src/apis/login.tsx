import axios, { AxiosRequestConfig } from "axios";
// import "dotenv/config";
import process from "process";

// dotenv.config();

interface LoginDto {
  email: string;
  password: string;
}

export const loginAPI = async (props: LoginDto) => {
  await axios
    .post(`/${process.env.API_BASE}auth/login`, {
      email: props.email,
      password: props.password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
