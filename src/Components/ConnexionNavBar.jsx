import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function ConnexionNavBar() {
  return (
    <Navbar id="conx-nav-bacground-color" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
        <span style={{ color: "white" }}>You</span>
          <span style={{ color: "red" }}>video.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{color:"white" , }} to="/">Home</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ConnexionNavBar;
