import { useEffect, useState } from "react";
import Loader from "../../shared/components/Loader";
import Message from "../../shared/components/Message";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { useCreateRequestDetailMutation } from "../request-detail.service";
import RequestBar from "./RequestBar";
import RequestDetailTable from "./RequestDetailTable";

const CreateRequest = () => {
  const [url, setUrl] = useState<string>("");
  const [method, setMethod] = useState<string>("GET");
  const {
    isLoading: axiosIsLoading,
    response,
    status,
    message,
    sendHttpRequest,
  } = useHttpRequest();
  const [createRequestDetail, { data: requestDetail, isLoading, isError }] =
    useCreateRequestDetailMutation();

  const handleOnClick = () => {
    sendHttpRequest({
      method,
      url,
    });
  };

  useEffect(() => {
    if (response && response.status && response.config) {
      const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      createRequestDetail({
        status: response.status,
        errors: {},
        data: {
          url: response.config.url!,
          response,
          request: response.request,
          date,
        },
      });
    }
  }, [response, createRequestDetail]);

  return (
    <>
      <div className="text-center mb-4">
        <h1 className="display-1">{status}</h1>
        <p className="text-muted">{message}</p>
      </div>
      <RequestBar
        method={method}
        onMethodChange={setMethod}
        requestUrl={url}
        onRequestUrlChange={setUrl}
        onButtonClick={handleOnClick}
        disabled={false}
      />
      {axiosIsLoading || isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="warning" dismissible={true}>
          {"Something went wrong while saving the request."}
        </Message>
      ) : requestDetail ? (
        <RequestDetailTable requestDetail={requestDetail} disabled={false} />
      ) : null}
    </>
  );
};

export default CreateRequest;
