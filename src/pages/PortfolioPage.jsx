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
            <h1 className="text-center fw-bold my-3" style={{ letterSpacing: "2px" }}>
              Portofolio Kami
            </h1>
            <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#ff6b6b" }}>
                Selamat datang di galeri musik kami! Nikmati koleksi video musik yang menarik.
              </p>
          </Col>
        </Row>
        <Row className="header-content g-4">
          {dataSwiper.map((item) => (
            <Col key={item.id} sm={6} md={4}>
              <div className="video-card shadow-sm rounded p-1 bg-success-subtle text-success">
                <ReactPlayer url={item.video} controls width="100%" height="auto"/>
                <div className="people d-flex align-items-left mt-3">
                </div>
              </div>
              <Col>
              <div className="d-flex flex-column align-items-start">
                <h4 className="fw-bold my-2 text-uppercase text-light" style={{ letterSpacing: "2px", fontFamily: "Workbench" }}>
                  {item.name}
                </h4>
                <p className="mb-2 text-light" style={{ fontSize: "1.2rem", fontFamily: "Tulpen One"}}>
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

export default PortfolioPage;