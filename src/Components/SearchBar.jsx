import { Container, Row, Col, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SearchBar = function () {
  const location = useLocation();
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col>
            <h2 className="text-center text-white">Search here</h2>
            <div className="d-flex justify-content-center">
              <Form.Control
                type="text"
                className="w-50"
                placeholder={location.pathname}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SearchBar;
