import { Link } from "react-router-dom";
import logoSrc from "../assets/logo.png";
import "../css/nav.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/dashboard" >
          <div className="logo-container">
            <img src={logoSrc} alt="PMG Logo" className="nav-logo" />
            <div className="hover-box">
              <div className="chains">
                <span className="chain"></span>
                <span className="chain"></span>
              </div>
              <div className="box-text">Premium Movies Gallery</div>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Nav mx-3">
            <Nav.Link as={Link} to="/dashboard" className="Nav_link">
              Home
            </Nav.Link>
            <NavDropdown title="🎬 Category" id="basic-nav-dropdown" className="Nav_link">
              <NavDropdown.Item as={Link} to="/nowshowing" className="Nav_link">
                Now Showing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/comingsoon" className="Nav_link">
                Coming Soon
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/arabic" className="Nav_link">
                Arabic Movies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hits" className="Nav_link">
                International Hits
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="Nav_link">
              About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex search-box me-3">
            <Form.Control
              type="search"
              placeholder="Search movies..."
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </Form>
          <Button as={Link} to="/login" className="btton">
            Log in / Sign up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
