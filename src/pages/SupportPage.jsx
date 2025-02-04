import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const SupportPage = () => {
  return (
    <div className="contact-us w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="fw-bold mb-5">Contact Us</h1>
            <Row className="g-4">
              <Col md={4}>
                <div className="contact-info">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="3x"
                    className="mb-3"
                  />
                  <h4>Address</h4>
                  <p>123 Music Street, Melody City, Harmony 45678</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="contact-info">
                  <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3" />
                  <h4>Phone</h4>
                  <p>+1 (234) 567-8901</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="contact-info">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="3x"
                    className="mb-3"
                  />
                  <h4>Email</h4>
                  <p>support@musicai.com</p>
                </div>
              </Col>
            </Row>
            <Form className="mt-5">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Your Name" required />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </Col>
                <Col md={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    required
                  />
                </Col>
                <Col md={12} className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="cta-button"
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SupportPage;
