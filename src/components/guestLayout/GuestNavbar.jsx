import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Import Link

const GuestNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ffe0b2" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold" }}>
          My Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
             <Nav.Link as={Link} to="/delivery">Delivery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GuestNavbar;
