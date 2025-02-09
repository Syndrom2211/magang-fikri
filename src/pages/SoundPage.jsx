import React from "react";
import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col } from "react-bootstrap";
import "../style/produk-3.css";
import pict1 from "../assets/pict1.png";
import pict2 from "../assets/pict2.png";
import pict3 from "../assets/pict3.png";

const SoundPage = () => {
  return (
    <div className="sound-page">
      {/* Header */}
      <div className="page text-center">
        <Row className="justify-content-center pt-5">
          <Col md={10}>
            <h2 className="judul">
              Buat <span className="span">Sound Effect </span> yang Meningkatkan Karya Musikmu
            </h2>
          </Col>
        </Row>

        {/* Gambar & Button */}
        <Row className="justify-content-center mt-4">
          <Col md={3} className="d-flex flex-column align-items-center">
            <img src={pict1} className="img-fluid rounded shadow-lg" alt="Create" />
            <button className="btn btn-outline-warning mt-3 w-75">CREATE</button>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <img src={pict2} className="img-fluid rounded shadow-lg" alt="Process" />
            <button className="btn btn-outline-warning mt-3 w-75">PROSES</button>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center">
            <img src={pict3} className="img-fluid rounded shadow-lg" alt="Result" />
            <button className="btn btn-outline-warning mt-3 w-75">RESULT</button>
          </Col>
        </Row>

        {/* Button Utama */}
        <Row className="justify-content-center mt-5">
          <Col md={6} className="d-flex justify-content-center">
            <button className="btn btn-warning px-4 py-2 text-dark fw-bold">CREATE YOURS</button>
          </Col>
        </Row>
      </div>

      {/* Komponen Tambahan */}
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
  