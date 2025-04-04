import { Button, Container, NavDropdown } from "react-bootstrap";

const PreHome = function () {
  return (
    <>
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h2 className="mb-0 text-white">TV Shows</h2>

            <NavDropdown
              title={<span className="text-white">Genres</span>}
              id="genres-dropdown"
              className="ms-4 mt-1 btn btn-outline-secondary btn-sm rounded-0"
            >
              <NavDropdown.Item href="#comedy">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#drama">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#thriller">Thriller</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div>
            <i className="bi bi-grid icons me-2"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
      </Container>
    </>
  );
};
export default PreHome;
