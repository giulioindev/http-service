import { Link, useParams } from "react-router-dom";
import Loader from "../../shared/components/Loader";
import Message from "../../shared/components/Message";
import { useGetRequestDetailQuery } from "../request-detail.service";
import RequestBar from "./RequestBar";
import RequestDetailTable from "./RequestDetailTable";

const ShareRequestDetail = () => {
  const { id } = useParams();
  const {
    data: requestDetail,
    isLoading,
    isError,
  } = useGetRequestDetailQuery(`${id!}`);

  const handleNothing = () => {};

  return (
    <>
      <Link to="/">Go Back</Link>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="warning" dismissible={true}>
          {"Something went wrong while loading the request."}
        </Message>
      ) : requestDetail ? (
        <>
          <RequestBar
            method={requestDetail.data.response.config!.method!.toUpperCase()}
            onMethodChange={handleNothing}
            requestUrl={requestDetail.data.response.config!.url!}
            onRequestUrlChange={handleNothing}
            onButtonClick={handleNothing}
            disabled={true}
          />
          <RequestDetailTable requestDetail={requestDetail} disabled={true} />
        </>
      ) : null}
    </>
  );
};

export default ShareRequestDetail;
