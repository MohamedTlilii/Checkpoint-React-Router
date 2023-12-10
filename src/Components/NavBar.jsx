import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import ReactStars from "react-stars";
import { VscDebugRestart } from "react-icons/vsc";
function NavBar({ setSearch, setRate }) {
  // const [search, setSearch] = useState("");
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
              <Link className="link-nav" style={{ color: "white" }} to="/">
                Home
              </Link>{" "}
            </Nav.Link>

            <Nav.Link>
              <Link style={{ color: "white" }} to="/movies">
                Movies
              </Link>{" "}
            </Nav.Link>
            <Nav.Link style={{ color: "white" }}>Shows</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Premium</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Pages</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Admin</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Contact Us</Nav.Link>

            <button className="btn-login-register">
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>{" "}
            </button>

            <button className="btn-login-register">
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>{" "}
            </button>
            <input
              type="text"
              id="searchInput"
              placeholder="Search.."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <div className="ratinggg">
              <ReactStars
                half={false}
                count={5}
                // onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
                onChange={(newRating) => {
                  setRate(newRating);
                }}
              />
              <VscDebugRestart
                className="restart-btn"
                color="white"
                size={"20"}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
