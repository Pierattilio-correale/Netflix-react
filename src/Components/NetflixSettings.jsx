import { Container, Row, Col, Button } from "react-bootstrap";
const NetflixSettings = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <p className="text-white fs-3">ACCOUNT</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-secondary fs-5">Membership & Billing</p>
          <Button variant="btn-btncolorextra" className="py-2">
            Cancel Membership
          </Button>
        </Col>
        <Col>
          <p className="fs-6 text-white">student@strive.school</p>
          <p className="text-white">Password ********</p>
          <p className="text-white">Phone 321 044 1272</p>
        </Col>
        <Col>
          <p>
            <a href="#" className="text-decoration-none">
              Change Account email
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Change Password
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Change Phone Number
            </a>
          </p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="offset-4">
          <p>
            <i className="bi bi-paypal px-2"></i>
            <span className="px-2 fw-bold">PAYPAL</span> admin@strive.school
          </p>
        </Col>
        <Col>
          <p>
            <a href="#" className="text-decoration-none">
              Update payment info
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Billing Details
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="offset-8">
          <p>
            <a href="#" className="text-decoration-none">
              Redeem Gift Card or promo code
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Where to buy gift cards
            </a>
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <p className="text-secondary fs-5">Plan Details</p>
        </Col>
        <Col>
          <p className="text-white">
            Premium <button className="shadow pe-auto my-0 ">ULTRA HD</button>
          </p>
        </Col>
        <Col>
          <p>
            <a href="#" className="text-decoration-none">
              Change plan
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-secondary fs-5">SETTINGS</p>
        </Col>
        <Col>
          <p>
            <a href="#" className="text-decoration-none">
              Parental Controls
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Test Participation
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Manage download devices
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Activate a device
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Recent device streaming activity
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Sign in out of all devices
            </a>
          </p>
        </Col>
        <Col className="invisible">
          <p>ACCOUNT</p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <p className="text-secondary fs-5">MY PROFILE</p>
        </Col>
        <Col>
          <div className="d-flex">
            <img
              src="public/avatar.png"
              alt="Avatar"
              width="50px"
              height="50px"
            />
            <p className="ps-2 my-4 text-white">Strive Student</p>
          </div>
          <p>
            <a href="#" className="text-decoration-none">
              Language
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Playback
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Service
            </a>
          </p>
        </Col>
        <Col className="invisible">
          <p>ACCOUNT</p>
        </Col>
      </Row>
      <Row>
        <Col className="invisible">
          <p>ACCOUNT</p>
        </Col>
        <Col>
          <p>
            <a href="#" className="text-decoration-none">
              View activity
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Ratings
            </a>
          </p>
        </Col>
        <Col>
          <p>
            <a href="#" className="text-decoration-none">
              Language
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Playback Settings
            </a>
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Subtitle Appearance
            </a>
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="invisible">
          <p>ACCOUNT</p>
        </Col>
        <Col className="invisible">
          <p>ACCOUNT</p>
        </Col>
        <Col className="invisible">
          <p>
            <a href="#" className="text-decoration-none"></a>
          </p>
          <p>
            <a href="#" className="text-decoration-none"></a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NetflixSettings;
