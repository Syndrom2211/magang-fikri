import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataSwiper, portfolioSectionData } from "../data/index";
import PropTypes from "prop-types";

const genres = ["All", "Accoustic", "Dubstep", "Jazz", "Pop", "Progressive", "Sundanese"];

const PortfolioPage = ({ language }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredVideos =
    selectedGenre === "All"
      ? dataSwiper[language]
      : dataSwiper[language].filter((item) => item.genre === selectedGenre);

  return (
    <div className="homePage portfolio">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-3" style={{ letterSpacing: "2px" }}>
                {portfolioSectionData[language].title}
              </h1>
              <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#ff6b6b" }}>
                {portfolioSectionData[language].description}
              </p>
            </Col>
          </Row>
          <Row className="mb-4 text-center">
            {genres.map((genre) => (
              <Col key={genre}>
                <Button
                  variant={selectedGenre === genre ? "success" : "outline-success"}
                  onClick={() => setSelectedGenre(genre)}
                  className="m-1"
                >
                  {genre}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="header-content g-4">
            {filteredVideos.map((item) => (
              <Col key={item.id} sm={6} md={4}>
                <div className="video-card shadow-sm rounded p-3 bg-dark text-light">
                  <h4 className="fw-bold my-2 text-uppercase" style={{ letterSpacing: "2px" }}>
                    {item.name}
                  </h4>
                  <p className="mb-2" style={{ fontSize: "1.2rem" }}>
                    {item.description}
                  </p>
                  {/* Pemutar Audio */}
                  <audio controls style={{ width: "100%" }}>
                    <source src={encodeURI(`/${item.audio}`)} type="audio/mp3" />
                    Browser Anda tidak mendukung pemutar audio.
                  </audio>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
};

PortfolioPage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default PortfolioPage;
