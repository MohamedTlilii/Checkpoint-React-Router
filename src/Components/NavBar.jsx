// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar id="nav-bacground-color" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <span style={{ color: "white" }}>You</span>
          <span style={{ color: "red" }}>video.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link-nav" style={{color:"white" }} to="/">Home</Link>{" "}
            </Nav.Link>
            
            <Nav.Link>
              <Link style={{color:"white"}} to="/movies">Movies</Link>{" "}
            </Nav.Link>
            <Nav.Link style={{color:"white"}}>Shows</Nav.Link>
            <Nav.Link style={{color:"white"}}>Premium</Nav.Link>
            <Nav.Link style={{color:"white"}}>Pages</Nav.Link>
            <Nav.Link style={{color:"white"}}>Admin</Nav.Link>
            <Nav.Link style={{color:"white"}}>Contact Us</Nav.Link>

            <button className="btn-login-register">
              <Link to="/login" style={{color:"white"}}>Login</Link>{" "}
            </button>

            <button className="btn-login-register">
              <Link to="/register" style={{color:"white"}}>Register</Link>{" "}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
