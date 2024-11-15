import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CreateRequest = () => {
  const [url, setUrl] = useState("www.yoursite.com/home/index.php");
  const [httpVerb, setHttpVerb] = useState("GET"); // State to manage selected HTTP verb
  const [responseCode, setResponseCode] = useState("200");
  const [responseMessage, setResponseMessage] = useState("Everything is fine!");

  const handleSendRequest = () => {
    // Logic to send the request goes here
    console.log("Send request to:", url);
  };
  return (
    <>
      {/* Status Section */}
      <div className="text-center mb-4">
        <h1 className="display-1">{responseCode}</h1>
        <p className="text-muted">{responseMessage}</p>
      </div>

      {/* URL Input Section */}
      <Row className="justify-content-center mb-4">
        <Col md={8} className="d-flex">
          {/* HTTP Verb Select */}
          <Form.Select
            value={httpVerb}
            onChange={(e) => setHttpVerb(e.target.value)}
            className="w-auto mr-2"
            disabled
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="PATCH">PATCH</option>
            <option value="OPTIONS">OPTIONS</option>
            <option value="HEAD">HEAD</option>
          </Form.Select>
          {/* URL Input */}
          <Form.Control
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-grow-1"
          />
          <Button
            variant="primary"
            onClick={handleSendRequest}
            className="ml-2"
          >
            SEND
          </Button>
        </Col>
      </Row>

      {/* Info and Response Section */}
      <Row className="justify-content-center">
        {/* URL Info */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="text-muted">URL INFO</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <strong>DOMAIN</strong>
                </Col>
                <Col className="text-muted text-right">www.yoursite.com</Col>
              </Row>
              <Row>
                <Col>
                  <strong>SCHEME</strong>
                </Col>
                <Col className="text-muted text-right">HTTP</Col>
              </Row>
              <Row>
                <Col>
                  <strong>PATH</strong>
                </Col>
                <Col className="text-muted text-right">home</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Response Box 1 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="text-muted">RESPONSE</Card.Header>
            <Card.Body>
              <Row>
                <Col>HTTP/1.1 302</Col>
              </Row>
              <Row>
                <Col>Location: /newpage.php</Col>
              </Row>
              <Row>
                <Col>Server: Apache/2.2.14 (Win32)</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Response Box 2 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="text-muted">RESPONSE</Card.Header>
            <Card.Body>
              <Row>
                <Col>HTTP/1.1 200 OK</Col>
              </Row>
              <Row>
                <Col>Date: Mon, 27 Jul 2009</Col>
              </Row>
              <Row>
                <Col>Server: Apache/2.2.14 (Win32)</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Share Section */}
      <div className="text-center mt-4">
        <h5 className="text-muted">SHARE</h5>
        <p>httprequest.com/1a54da684864</p>
      </div>
    </>
  );
};

export default CreateRequest;
