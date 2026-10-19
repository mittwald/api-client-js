import type { AxiosRequestConfig } from "axios";

export const getAxiosRequestConfig = (request: AxiosRequestConfig) =>
  request as AxiosRequestConfig;
