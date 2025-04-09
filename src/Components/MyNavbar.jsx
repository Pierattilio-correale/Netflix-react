import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
        <Link className="navbar-brand" to="/">
          <img
            src="logo.png"
            width="100"
            height="55"
            className="d-inline-block align-top"
            alt="Netflix Logo"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link active fw-bold" to="/">
              Home
            </Link>
            <Link className=" nav-link fw-bold" to="/tv">
              TV Shows
            </Link>
            <Link className=" nav-link fw-bold" to="/FirstRowOfFilms/:">
              Trending Now
            </Link>
            <Link className=" nav-link fw-bold" to="/SecondRowOfFilms/:">
              Watch It Again
            </Link>
            <Link className="nav-link fw-bold" to="/ThirdRowOfFilms/:">
              New Releases
            </Link>
            <Link className="nav-link fw-bold" to="/NetflixSettings">
              Page Settings
            </Link>
            {/* <Link className="nav-link fw-bold" to="/PaginaProfiloExtra">
              Profile Extra
            </Link> */}
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <Link to="/PaginaProfiloExtra">
              {" "}
              <i className="bi bi-person-circle icons"></i>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
