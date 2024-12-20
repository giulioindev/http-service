import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { parseUrl } from "../../shared/utils";
import RequestDetail from "../interfaces/request-detail";

type RequestDetailTableProps = {
  requestDetail: RequestDetail;
  disabled: boolean;
};

const RequestDetailTable = ({
  requestDetail,
  disabled,
}: RequestDetailTableProps) => {
  const { domain, scheme, path } = parseUrl(
    requestDetail.data.response.config!.url!
  );

  return (
    <>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="text-muted">URL INFO</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <strong>DOMAIN</strong>
                </Col>
                <Col className="text-muted text-right">{domain}</Col>
              </Row>
              <Row>
                <Col>
                  <strong>SCHEME</strong>
                </Col>
                <Col className="text-muted text-right">
                  {scheme.toUpperCase()}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>PATH</strong>
                </Col>
                <Col className="text-muted text-right">{path}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="text-muted">RESPONSE</Card.Header>
            <Card.Body>
              <Row>
                <Col>HTTP/1.1 {requestDetail.data.response.status}</Col>
              </Row>
              <Row>
                <Col>Date: {requestDetail.data.date}</Col>
              </Row>
              <Row>
                <Col>Server: "the server"</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <LinkContainer to={`/${requestDetail.id}`}>
        <div className="text-center mt-4">
          <h5 className="text-muted">SHARE</h5>
          <Button variant="light" className="sm" disabled={disabled}>
            <p>{requestDetail.id}</p>
          </Button>
        </div>
      </LinkContainer>
    </>
  );
};

export default RequestDetailTable;
