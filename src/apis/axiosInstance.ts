import axios, { AxiosError, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: ``,
  timeout: 1000,
});
