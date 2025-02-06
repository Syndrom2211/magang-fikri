import "react"; // Fix import
import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col } from "react-bootstrap";

const LyricsPage = () => {
  return (
    <div className="lyrics-page">
      <Container>
        <Row className="text-center pt-5">
          <Col className="py-5">
            <ProductDescComponent page="lyrics" />
          </Col>
        </Row>
        <Row>
          <Col>
            <HowItWorksComponent page="lyrics" />
            <PriceListComponent page="lyrics" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LyricsPage; // Add export
