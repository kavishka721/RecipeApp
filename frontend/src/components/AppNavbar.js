import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";

function AppNavbar() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RecipeHUB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Add recipre</Nav.Link>
            <Nav.Link href="#pricing">Edit recipe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default AppNavbar;