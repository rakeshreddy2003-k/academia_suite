import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
function NavbarComp({ onLoginClick }) {
  return (
    <Navbar
      expand="lg"
      bg="primary" // Bootstrap theme color or you can use custom color in style
      variant="dark"
      fixed="top" // keeps it at top when scrolling
      className="shadow-sm"
      style={{
        background: "linear-gradient(90deg, #004aad, #007bff)", // gradient blue
      }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-white fs-4">
          <img
            src={logo}
            alt="Academia Suite"
            style={{ width: 36, height: 36, marginRight: 10 }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          Academia Suite
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="text-white me-3">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white me-3">About</Nav.Link>
            <Nav.Link href="#contact" className="text-white me-3">Contact</Nav.Link>
            <Button
  variant="light"
  className="text-primary fw-semibold px-4"
  onClick={onLoginClick}
>
  Login
</Button>

<Button
  variant="light"
  className="text-primary fw-semibold px-4"
  style={{ marginLeft: "12px" }}
  onClick={onLoginClick}
>
  Registration
</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;



