'use client';
import { Container, Nav, Navbar } from "react-bootstrap";

export const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/practice/warning">Alert</Nav.Link>
            <Nav.Link href="/practice/post">Card</Nav.Link>
            <Nav.Link href="/practice/popup">Modal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
