import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = function () {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      className=" navbar  "
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="public/logo.png"
            width="100"
            height="55"
            className="d-inline-block align-top"
            alt="Netflix Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="active fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#tv-shows" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#movies" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#recently-added" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#my-list" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
