import { Link, useParams } from "react-router-dom";
import Loader from "../../shared/components/Loader";
import { useGetRequestDetailQuery } from "../request-detail.service";
import RequestBar from "./RequestBar";
import RequestDetailTable from "./RequestDetailTable";

const ShareRequestDetail = () => {
  const { id } = useParams();
  const { data: requestDetail, isLoading } = useGetRequestDetailQuery(`${id!}`);
  const handleNothing = () => {};

  return (
    <>
      <Link to="/">Go Back</Link>
      {isLoading ? (
        <Loader />
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
