import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col } from "react-bootstrap";

const SoundPage = () => {
  return (
    <div className="sound-page">
      <Container>
        <Row className="text-center pt-5">
          <Col className="py-5">
          <ProductDescComponent page="sound" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <HowItWorksComponent page="sound" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <PriceListComponent page="sound" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SoundPage;
