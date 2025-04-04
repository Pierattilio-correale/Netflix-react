import {
  Col,
  Container,
  Row,
  Dropdown,
  Button,
  Form,
  FormCheck,
} from "react-bootstrap";

const PaginaProfiloExtra = function () {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="text-secondary border-bottom border-1 w-50">
          <h1 className="d-flex justify-content-center fs-1 text-white">
            Edit Profile
          </h1>
        </div>
      </div>
      <Container>
        <Row>
          <Col className="col-12 col-lg-6 my-5 ms-5 ps-5 d-flex justify-content-lg-end">
            <img
              src="public/avatar.png"
              alt="profile"
              width="100px"
              height="100px"
            />
          </Col>
          <Col className="my-5">
            <Row>
              <Col className="d-flex justify-content-start">
                <p className="border border-2 bg-secondary text-white w-75 fs-4 text-center">
                  Strive Student
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="col-3">
                <p className="text-secondary fs-4">Language :</p>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="language-dropdown"
                    className="text-white fs-6 text-center w-100 border-2"
                  >
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">German</Dropdown.Item>
                    <Dropdown.Item href="#">Italian</Dropdown.Item>
                    <Dropdown.Item href="#">Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <p className="text-secondary fs-4">Maturity Settings:</p>
                <Button variant="secondary" className="text-white">
                  All Maturity Ratings
                </Button>
                <p className="text-white">
                  Show titles of all maturity ratings for this profile
                </p>
                <Button variant="outline-secondary" className="py-2 px-4">
                  Edit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fs-4 text-secondary">Autoplay Controls</p>
                <Form>
                  <FormCheck
                    type="checkbox"
                    id="autoplay-episodes"
                    label="Autoplay next episode in a series on all devices."
                    className="fs-3 text-secondary"
                    defaultChecked
                  />
                  <FormCheck
                    type="checkbox"
                    id="autoplay-previews"
                    label="Autoplay previews while browsing on all devices."
                    className="my-2 fs-3 text-secondary"
                    defaultChecked
                  />
                </Form>
              </Col>
            </Row>
            <Col className="my-5">
              <Button
                variant="light"
                className="px-3 py-3 fs-4 mx-2 my-3 my-md-0"
              >
                SAVE
              </Button>
              <Button
                variant="outline-secondary"
                className="px-3 py-3 fs-4 mx-2 my-3 my-md-0"
              >
                CANCEL
              </Button>
              <Button
                variant="outline-secondary"
                className="px-3 py-3 fs-4 mx-2 my-3 my-xl-0"
              >
                DELETE PROFILE
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaginaProfiloExtra;
