import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { dataSwiper } from "../data/index";
const PortfolioPage = () => {
  return (
    <div className="homePage portfolio">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold my-3 text-uppercase" style={{ letterSpacing: "2px" }}>
              Gallery Music
            </h1>
            <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#F57D1F" }}>
                Selamat datang di galeri musik kami! Nikmati koleksi video musik yang menarik.
              </p>
          </Col>
        </Row>
        <Row className="header-content g-4">
          {dataSwiper.map((item) => (
            <Col key={item.id} sm={6} md={6}>
              <div className="video-card shadow-sm rounded p-1 bg-success-subtle text-success">
                <ReactPlayer url={item.video} controls width="100%" height="auto"/>
                <div className="people d-flex align-items-left mt-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="mb-1 fw-bold d-flex align-items-left">{item.name}</h4>
                    <p className="m-3 b-0 fw-semibold text-success-emphasis">{item.skill}</p>
                    <p className="m-2 fw-lighter text-dark">{item.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      </header>
    </div>
  );
};

export default PortfolioPage;