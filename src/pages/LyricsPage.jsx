import "react"; 
import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../assets/Frame1.png";
import "../style/produk-1.css";

const LyricsPage = () => {
  return (
    <div className="lyrics-page">
    <div className="product-wrapper">
    <Container fluid className="music-container">
      <Row className="d-flex flex-column flex-md-row align-items-center">
        {/* Kolom Kiri - Gambar */}
        <Col md={6} className="image-section">
          <div className="image-overlay">
            <img src={myImage} alt="Music Inspiration" className="music-image img-fluid" />
            <div className="overlay-content">
              <h2 className="song-title">This Song For You</h2>
              <div className="music-controls">
                <button className="btn btn-outline-light">▶</button>
                <button className="btn btn-outline-light">⏸</button>
                <button className="btn btn-outline-light">⏹</button>
              </div>
              <button className="btn btn-success download-btn">Download Your Musik</button>
            </div>
          </div>
        </Col>

        {/* Kolom Kanan - Konten */}
        <Col md={6} className="music-section">
          <div className="music-content">
            <h3 className="inspiration-title">
              Temukan <span>Inspirasimu</span> di Sekitar, <br />
              Mulailah dari Perasaanmu!
            </h3>
            <p className="inspiration-text">
            "Dengar suara hujan, lihat matahari terbit, rasakan detak jantungmu.
              Setiap lagu besar dimulai dari satu kata sederhana. Tulis apa yang kamu rasakan.
              Musik ada di mana-mana."
            </p>
            <h4 className="ai-title">AND CREATE YOUR <span>MUSIC WITH AI</span></h4>
            <textarea className="form-control lyric-input" placeholder="Your Lyric"></textarea>
            <button className="btn btn-primary create-btn">Create</button>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

      <Container>
        <Row className="text-center pt-5">
          <Col className="py-5">
            <ProductDescComponent page="lyrics" />
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col>
            <HowItWorksComponent page="lyrics" />
          </Col>
        </Row>
        <Row>
          <Col>
            <PriceListComponent page="lyrics" />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default LyricsPage;
