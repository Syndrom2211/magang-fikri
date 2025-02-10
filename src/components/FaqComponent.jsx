import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq, judulfaq } from "../data/index";
import PropTypes from 'prop-types';


const FaqComponent = ({language}) => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold">{judulfaq[language].name}</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq[language].map((data) => {
            return(
              <Col key={data.id}>
            <Accordion className="shadow-sm">
              <Accordion.Item eventKey={data.eventKey}>
                <Accordion.Header>{data.title}</Accordion.Header>
                <Accordion.Body>
                  {data.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
            );
          })}
          
        </Row>
      </Container>
    </div>
  );
};

FaqComponent.propTypes = {
  language: PropTypes.string.isRequired,
};

export default FaqComponent;
