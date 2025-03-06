import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FaqUserComponent = ({ language }) => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("/faq");
        // Filter FAQ berdasarkan status "Published"
        const publishedFaqs = response.data.filter(
          (faq) => faq.status === "Published"
        );
        setFaqs(publishedFaqs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (isLoading) {
    return <div>Loading FAQs...</div>;
  }

  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold">
              {language === "ID"
                ? "Pertanyaan yang Sering Diajukan"
                : "Frequently Asked Questions"}
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faqs.map((data) => (
            <Col key={data.id}>
              <Accordion className="shadow-sm">
                <Accordion.Item eventKey={data.id.toString()}>
                  <Accordion.Header>
                    {language === "ID" ? data.question_id : data.question_en}
                  </Accordion.Header>
                  <Accordion.Body>
                    {language === "ID" ? data.answer_id : data.answer_en}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

FaqUserComponent.propTypes = {
  language: PropTypes.string.isRequired,
};

export default FaqUserComponent;
