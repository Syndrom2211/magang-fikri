// import React from "react";
import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col } from "react-bootstrap";
import "../style/produk-3.css";
import pict1 from "../assets/pict1.png";
import pict2 from "../assets/pict2.png";
import pict3 from "../assets/pict3.png";

import { soundEffectSectionData } from "../data/index";
import PropTypes from 'prop-types';

const SoundPage = ({language}) => {
  return (
    <div className="sound-page">
      {/* Header */}
      <div className="page text-center">
        <Row className="justify-content-center pt-5">
          <Col md={10}>
            <h2 className="judul" dangerouslySetInnerHTML={{ __html: soundEffectSectionData[language].title }} />
          </Col>
        </Row>

        {/* Gambar & Button */}
        <Row className="justify-content-center mt-4">
          <Col md={3} className="d-flex flex-column align-items-center">
            <img src={pict1} className="img-fluid rounded shadow-lg" alt="Create" />
            <button className="btn btn-outline-warning mt-3 w-75">
              {soundEffectSectionData[language].buttons.create}
            </button>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <img src={pict2} className="img-fluid rounded shadow-lg" alt="Process" />
            <button className="btn btn-outline-warning mt-3 w-75">
              {soundEffectSectionData[language].buttons.process}
            </button>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <img src={pict3} className="img-fluid rounded shadow-lg" alt="Result" />
            <button className="btn btn-outline-warning mt-3 w-75">
              {soundEffectSectionData[language].buttons.result}
            </button>
          </Col>
        </Row>

        {/* Button Utama */}
        <Row className="justify-content-center mt-5">
          <Col md={6} className="d-flex justify-content-center">
            <button className="btn btn-warning px-4 py-2 text-dark fw-bold">
              {soundEffectSectionData[language].buttons.mainButton}
            </button>
          </Col>
        </Row>
      </div>

      {/* Komponen Tambahan */}
          <Container>
            <Row className="text-center pt-5">
              <Col className="py-5">
                <ProductDescComponent page="sound" language={language} />
              </Col>
            </Row>
          </Container>
      
          <Container>
            <Row>
              <Col>
                <HowItWorksComponent page="sound" language={language} />
              </Col>
            </Row>
            <Row>
              <Col>
                <PriceListComponent page="sound" language={language} />
              </Col>
            </Row>
          </Container>
          
    </div>
  );
};

SoundPage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default SoundPage;
  