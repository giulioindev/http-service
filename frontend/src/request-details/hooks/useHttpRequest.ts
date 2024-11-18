import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import {
  ERROR_MESSAGE,
  NO_RESPONSE_MESSAGE,
  SUCCESS_MESSAGE,
} from "../../shared/constants";

export const useHttpRequest = () => {
  const [response, setResponse] = useState<AxiosResponse | AxiosError | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const sendHttpRequest = async (config: AxiosRequestConfig) => {
    setIsLoading(true);
    let requestConfig;
    if (
      config.url &&
      !config.url.startsWith("http://") &&
      !config.url.startsWith("https://")
    ) {
      requestConfig = { ...config, url: `http://${config.url}` };
    } else {
      requestConfig = config;
    }
    try {
      const axiosResponse = await axios({ ...requestConfig, baseURL: "" });
      setResponse(axiosResponse);
      setMessage(SUCCESS_MESSAGE);
      setStatus(axiosResponse.status);
    } catch (caughtError) {
      console.log(caughtError);
      if (axios.isAxiosError(caughtError)) {
        if (caughtError.response) {
          setResponse(caughtError);
          setMessage(caughtError.message);
          setStatus(caughtError.response.status);
        } else {
          setResponse(null);
          setMessage(NO_RESPONSE_MESSAGE);
          setStatus(null);
        }
      } else {
        setResponse(null);
        setMessage(ERROR_MESSAGE);
        setStatus(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    status,
    message,
    sendHttpRequest,
  };
};
