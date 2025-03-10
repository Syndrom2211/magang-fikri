import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { contactData } from "../data/index";
import PropTypes from 'prop-types';

const SupportPage = ({language}) => {
  const form = useRef();

    // Tawk.to integration
    useEffect(() => {
      // Create Tawk.to script element
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = 'https://embed.tawk.to/67ce66c1c7388b190b531937/1ilv42p15';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      
      // Append script to body
      document.body.appendChild(s1);
      
      // Cleanup function to remove script when component unmounts
      return () => {
        document.body.removeChild(s1);
      };
    }, []); // Empty dependency array means this runs once on mount

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9tootbq", "template_rlkp529", form.current, {
        publicKey: "M-ppLBzI5LzsdyrVU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-us w-100 min-vh-100 d-flex align-items-center">
      <Container>
      <Row className="justify-content-center">
      <Col md={8} className="text-center">
        <h1 className="fw-bold mb-5">{contactData[language].title}</h1>
        <Row className="g-4">
          <Col md={4}>
            <div className="contact-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="mb-3" />
              <h4>{contactData[language].address.title}</h4>
              <p className="p-alamat">{contactData[language].address.detail}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3" />
              <h4>{contactData[language].phone.title}</h4>
              <p>{contactData[language].phone.detail}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3" />
              <h4>{contactData[language].email.title}</h4>
              <p>{contactData[language].email.detail}</p>
            </div>
          </Col>
        </Row>
        <Form className="mt-5" ref={form} onSubmit={sendEmail}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Control type="text" name="user_name" placeholder={contactData[language].form.namePlaceholder} required />
            </Col>
            <Col md={6}>
              <Form.Control type="email" name="email_name" placeholder={contactData[language].form.emailPlaceholder} required />
            </Col>
            <Col md={12}>
              <Form.Control as="textarea" rows={5} name="message" placeholder={contactData[language].form.messagePlaceholder} required />
            </Col>
            <Col md={12} className="text-center">
              <Button variant="primary" type="submit" className="cta-support" value="Send">
                {contactData[language].form.submitButton}
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

SupportPage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default SupportPage;
