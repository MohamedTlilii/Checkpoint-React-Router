// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <span style={{ color: "black" }}>You</span>
          <span style={{ color: "red" }}>video.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>{" "}
            </Nav.Link>
            
            <Nav.Link>
              <Link to="/movies">Movies</Link>{" "}
            </Nav.Link>
            <Nav.Link>Shows</Nav.Link>
            <Nav.Link>Premium</Nav.Link>
            <Nav.Link>Pages</Nav.Link>
            <Nav.Link>Admin</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>

            <button className="btn-login-register">
              <Link to="/login">Login</Link>{" "}
            </button>

            <button className="btn-login-register">
              <Link to="/register">Register</Link>{" "}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
