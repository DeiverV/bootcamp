import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Footer Talento Tech ;D</h5>
            <p>Hi everyone, this is my footer.</p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>Email: deiber@verano.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
