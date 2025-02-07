import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col } from "react-bootstrap";

const InstrumentPage = () => {
  return (
    <div className="instrument-page">
      <Container>
        <Row className="text-center pt-5">
          <Col className="py-5">
            <ProductDescComponent page="instrument" />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <HowItWorksComponent page="instrument" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <PriceListComponent page="instrument" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default InstrumentPage;
