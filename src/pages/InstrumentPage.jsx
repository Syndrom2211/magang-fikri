import "react";
import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/produk-2.css";
import backgroundImage from "../assets/Frame-2.png";
import { instrumentSectionData } from "../data/index";
import PropTypes from 'prop-types';

const InstrumentPage = ({language}) => {
  return (
    <div className="instrument-page">
      <div
        className="product-page"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Container>
          <Row className="text-center pt-5">
            <Col>
              <div className="tulisan">
                <h1 className="headline" dangerouslySetInnerHTML={{ __html: instrumentSectionData[language].headline }} />
                <p className="subtext">{instrumentSectionData[language].subtext}</p>
                <Button className="btn btn-primary create-btn">
                  {instrumentSectionData[language].buttonText}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content Section */}
    <Container>
      <Row className="text-center pt-5">
        <Col className="py-5">
          <ProductDescComponent page="instrument" language={language} />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <HowItWorksComponent page="instrument" language={language} />
        </Col>
      </Row>
      <Row>
        <Col>
          <PriceListComponent page="instrument" language={language} />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

InstrumentPage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default InstrumentPage;
