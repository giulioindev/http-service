import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    // This is the error type annotation { statusCode: number; responseBody: any }
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      // Result.data is from axios response
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      console.error(error);
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export default axiosBaseQuery;
