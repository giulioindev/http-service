import { Button, Col, Form, Row } from "react-bootstrap";

interface RequestBarProps {
  method: string;
  onMethodChange: (value: string) => void;
  requestUrl: string;
  onRequestUrlChange: (value: string) => void;
  disabled: boolean;
  onButtonClick: () => void;
}

const RequestBar = ({
  method,
  onMethodChange,
  requestUrl,
  onRequestUrlChange,
  disabled,
  onButtonClick,
}: RequestBarProps) => {
  const onMethodChangeLocal = disabled ? () => {} : onMethodChange;
  const onRequestUrlChangeLocal = disabled ? () => {} : onRequestUrlChange;
  const onButtonClickLocal = disabled ? () => {} : onButtonClick;
  return (
    <>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="d-flex">
          <Form.Select
            value={method}
            onChange={(event) => onMethodChangeLocal(event.target.value)}
            className="w-auto mr-2"
            disabled={disabled}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="INFO">INFO</option>
            <option value="DUMB">DUMB</option>
          </Form.Select>
          <Form.Control
            type="text"
            value={requestUrl}
            onChange={(event) => onRequestUrlChangeLocal(event.target.value)}
            className="flex-grow-1"
            disabled={disabled}
          />
          <Button
            variant="primary"
            onClick={onButtonClickLocal}
            className="ml-2"
            disabled={disabled || requestUrl.trim() === ""}
          >
            SEND
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default RequestBar;
