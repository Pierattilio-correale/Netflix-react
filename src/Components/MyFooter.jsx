import { Row, Col, Button, Container } from "react-bootstrap";
import "../App.css";

const MyFooter = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col className="col-6">
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-4">
          <Col xs="auto">
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Media Center
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Privacy
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Contact us
              </a>
            </p>
          </Col>

          <Col xs="auto">
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Audio Description
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Investor Relations
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Legal Notices
              </a>
            </p>
          </Col>

          <Col xs="auto">
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Help Center
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Jobs
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Cookie Preferences
              </a>
            </p>
          </Col>

          <Col xs="auto">
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Gift Cards
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Terms of Use
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-secondary text-decoration-none"
                alt="footer link"
              >
                Corporate Information
              </a>
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col className="col-auto">
            <Button
              variant="outline-secondary"
              type="button"
              className=" rounded-0 mt-3"
            >
              Service Code
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="col mb-2 mt-2 copyright text-center">
            © 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
