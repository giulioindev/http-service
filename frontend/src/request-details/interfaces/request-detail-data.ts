import { AxiosError, AxiosResponse } from "axios";

interface RequestDetailData {
  url: string;
  response: AxiosResponse | AxiosError;
  request: XMLHttpRequest;
  date: string;
}

export default RequestDetailData;
