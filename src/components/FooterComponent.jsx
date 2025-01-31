import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col>
            <h3 className="fw-bold">CMH.</h3>
            <p className="desc">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "8px" }}
              />
              Komplek Bandung Indah Raya, Blok C13/No.17, Kelurahan Mekarjaya,
              Kecamatan Rancasari, Kota Bandung, Jawa Barat 40286
            </p>
            <div className="no mb-1 mt-2">
              <Link className="text-decoration-none">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ marginRight: "8px" }}
                />
                <p className="m-0">+62 812-3456-7890</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginRight: "8px" }}
                />
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
            <div className="social mt-3">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ marginRight: "12px" }}
              />
              <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "12px" }} />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-5 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Products</h5>
            <Link to="/product">Pembuatan Music Under 1 Minute</Link>
            <Link to="/portfolio">Portfolio</Link>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Links</h5>
            <Link>Catalog</Link>
            <Link>Testimonial</Link>
            <Link>FAQ</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Creative Music Hub</span>,
              All Right Reserved{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
