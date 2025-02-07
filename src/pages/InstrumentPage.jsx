import React from "react";
import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/produk-2.css";
import backgroundImage from "../assets/Frame-2.png";

const InstrumentPage = () => {
  return (
    <div className="instrument-page">
      {/* Hero Section */}
      <div 
        className="product-page" 
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Container>
          <Row className="text-center pt-5">
            <Col>
              <div className = "tulisan">
              <h1 className="headline">
                "Temukan Kebebasan Berkarya Melalui <span className="highlight">Instrumen</span> Buatanmu"
              </h1>
              <p className="subtext">
                "Jadikan ide musikmu lebih hidup dengan instrumen buatan tangan yang bisa disesuaikan. 
                Desain, kustomisasi, dan mainkan semuanya ada di sini."
              </p>
              <Button variant="danger" className="get-started">GET STARTED</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content Section */}
      <Container>
        <Row className="text-center pt-5">
          <Col className="py-5">
            <ProductDescComponent page="instrument" />
          </Col>
        </Row>
        <Row>
          <Col>
            <HowItWorksComponent page="instrument" />
          </Col>
        </Row>
        <Row>
          <Col>
            <PriceListComponent page="instrument" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstrumentPage;
