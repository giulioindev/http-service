import CreateRequestDetail from "./create-request-detail";

interface RequestDetail extends CreateRequestDetail {
  id: string;
  created_at: string;
  updated_at: string;
}

export default RequestDetail;
