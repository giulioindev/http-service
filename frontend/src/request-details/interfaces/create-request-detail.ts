import RequestDetailData from "./request-detail-data";

interface CreateRequestDetail {
  status: number;
  errors: object;
  data: RequestDetailData;
}

export default CreateRequestDetail;
