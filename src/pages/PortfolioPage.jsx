import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { dataSwiper, portfolioSectionData } from "../data/index";
import PropTypes from "prop-types";

const genres = ["All", "Accoustic", "Dubstep", "Jazz", "Pop"];

const PortfolioPage = ({ language }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredVideos =
    selectedGenre === "All"
      ? dataSwiper
      : dataSwiper.filter((item) => item.genre === selectedGenre);

  return (
    <div className="homePage portfolio">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <h1
                className="text-center fw-bold my-3"
                style={{ letterSpacing: "2px" }}
              >
                {portfolioSectionData[language].title}
              </h1>
              <p
                className="text-center mb-5"
                style={{ fontSize: "1.2rem", color: "#ff6b6b" }}
              >
                {portfolioSectionData[language].description}
              </p>
            </Col>
          </Row>
          <Row className="mb-4 text-center">
            {genres.map((genre) => (
              <Col key={genre}>
                <Button
                  variant={
                    selectedGenre === genre ? "success" : "outline-success"
                  }
                  onClick={() => setSelectedGenre(genre)}
                  className="m-1"
                >
                  {genre}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="header-content g-4">
            {filteredVideos[language].map((item) => (
              <Col key={item.id} sm={6} md={4}>
                <div className="video-card shadow-sm rounded p-1 bg-success-subtle text-success">
                  <ReactPlayer
                    url={item.video}
                    controls
                    width="100%"
                    height="auto"
                  />
                </div>
                <Col>
                  <div className="d-flex flex-column align-items-start">
                    <h4
                      className="fw-bold my-2 text-uppercase text-light"
                      style={{ letterSpacing: "2px", fontFamily: "Workbench" }}
                    >
                      {item.name}
                    </h4>
                    <p
                      className="mb-2 text-light"
                      style={{ fontSize: "1.2rem", fontFamily: "Tulpen One" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Col>
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
