import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <Row className="align-items-center">
          <h1>404</h1>
        </Row>
        <Row className="align-items-center">
          <p>
            Page not found. 🥲 <Link to="/">Go Back</Link>
          </p>
        </Row>
      </div>
    </>
  );
};

export default NotFound;
