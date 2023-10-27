import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";

function AppHeader() {
  return (
    <div>
      <Navbar expand="lg" className="company-font">
        <Container>
          <Navbar.Brand href="#home" className="logo-size">
            find<span className="compony-color">U</span>
          </Navbar.Brand>
          <SearchBar></SearchBar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#register" className="company-button">
                Register Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppHeader;
