import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState,useEffect,useRef  } from "react";
import axios from "axios";

import { creativeMusicHubData } from "../data/index";
import PropTypes from 'prop-types';

const FooterComponent = ({language}) => {
  const socialLinks = creativeMusicHubData[language].socialMedia;

  const handleSocialClick = (type) => {
    switch(type) {
      case 'instagram':
        window.open(socialLinks.instagram, '_blank');
        break;
      case 'website':
        window.open(socialLinks.website, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:${socialLinks.email}`;
        break;
      default:
        break;
    }
  };

  const [visitors, setVisitors] = useState(0);
  const hasIncremented = useRef(false);

  useEffect(() => {
    axios.get("http://localhost:1000/visitors")
      .then(response => {
        setVisitors(response.data.count);
        
        if (!hasIncremented.current && window.location.origin === "http://localhost:5173" && window.location.pathname === "/"){
          axios.post("http://localhost:1000/visitors");
          hasIncremented.current = true; // Tandai bahwa sudah ditambah
        }
      })
      .catch(error => console.error("Error fetching visitor count:", error));
  }, []);

  return (
    <div className="footer">
      <Container>
      <Row className="d-flex justify-content-between">
      <Col>
        <h3 className="fw-bold">
          {creativeMusicHubData[language].name}
          <span className="hub">Hub</span>
        </h3>
        <p className="desc">
          <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "8px" }} />
          {creativeMusicHubData[language].address}
        </p>
        <div className="no mb-1 mt-2">
          <Link className="text-decoration-none">
            <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "8px" }} />
            <p className="m-0">{creativeMusicHubData[language].contact.phone}</p>
          </Link>
        </div>
        <div className="mail">
          <Link className="text-decoration-none">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            <p className="m-0">{creativeMusicHubData[language].contact.email}</p>
          </Link>
        </div>
        <div className="social mt-3">
      <FontAwesomeIcon 
        icon={faInstagram} 
        style={{ marginRight: "12px", cursor: "pointer" }} 
        onClick={() => handleSocialClick('instagram')}
      />
      <FontAwesomeIcon 
        icon={faGlobe} 
        style={{ marginRight: "12px", cursor: "pointer" }} 
        onClick={() => handleSocialClick('website')}
      />
      <FontAwesomeIcon 
        icon={faEnvelope} 
        style={{ cursor: "pointer" }}
        onClick={() => handleSocialClick('email')}
      />
    </div>
      </Col>
      <Col className="d-flex flex-column col-lg-4 col mt-lg-0 mt-5">
        <h5 className="fw-bold">{creativeMusicHubData[language] === "ID" ? "Produk Kami" : "Our Products"}</h5>
        {creativeMusicHubData[language].products.map((product, index) => (
          <Link key={index} to={product.link}>
            {product.name}
          </Link>
        ))}
      </Col>
      <Col className="d-flex flex-column col-lg-3 col mt-lg-0 mt-5">
        <h5 className="fw-light">
          {creativeMusicHubData[language].visitorsLabel}: <span className="pengunjung">{visitors}</span>
        </h5>
      </Col>
      </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Creative Music Hub</span>, All Right
              Reserved{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

FooterComponent.propTypes = {
  language: PropTypes.string.isRequired,
};

export default FooterComponent;
