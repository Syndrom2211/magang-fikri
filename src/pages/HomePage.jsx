import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/music-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser, faTag } from "@fortawesome/free-solid-svg-icons";
import {
  products,
  dataSwiper,
  TextContent,
  ProductContent,
} from "../data/index";
import { PlayCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
// import Disqus from "../components/Disqus";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomePage = ({ language }) => {
  const catalogRef = useRef(null);
  const [setSwiperRef] = useState(null);
  const navigate = useNavigate();

  const [productOrderCounts, setProductOrderCounts] = useState({}); // State untuk order count per produk

  // Tawk.to integration
  useEffect(() => {
    // Create Tawk.to script element
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67ce66c1c7388b190b531937/1ilv42p15';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    // Append script to body
    document.body.appendChild(s1);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(s1);
    };
  }, []); // Empty dependency array means this runs once on mount

  const scrollToCatalog = () => {
    catalogRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCheckout = (product) => {
    navigate("/checkout", {
      state: {
        plan: { id: product.id, name: product.name, price: product.price },
        page: "catalog", // or whatever identifier you want
        language: language, // Pass the language prop
      },
    });
  };

  useEffect(() => {
    const fetchOrderCounts = async () => {
      try {
        const counts = {};
        for (const product of products[language]) {
          // Loop through products
          const response = await axios.get(`/orders/${product.id}`); // Gunakan product.id
          counts[product.id] = response.data.orderCount; // Simpan order count berdasarkan product.id
        }
        setProductOrderCounts(counts);
      } catch (error) {
        console.error("Error fetching order counts:", error);
        // Handle error, misalnya dengan menampilkan pesan ke user
      }
    };

    fetchOrderCounts();
  }, [language]);

  return (
    <div className="HomePage">
      {/* HOMEPAGE */}
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-content">
            <Col md={6}>
              <h1 className="fw-bold">{TextContent[language].title}</h1>
              <p className="fs-5">{TextContent[language].description}</p>
              <button className="cta-button" onClick={scrollToCatalog}>
                {TextContent[language].button}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Col>
            <Col md={6} className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero" className="grid-img" />
            </Col>
          </Row>
        </Container>
      </header>
      {/* CATALOG */}
      <div className="catalog w-100 min-vh-100" ref={catalogRef}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">
                {ProductContent[language].title}
              </h1>
              <p className="text-center">
                {ProductContent[language].description}
              </p>
            </Col>
          </Row>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-1">
            <Row className="g-4">
              {products[language].map((product) => (
                <Col
                  key={product.id}
                  md={4}
                  sm={6}
                  className="shadow-sm rounded">
                  <div className="product-card p-3 border rounded shadow-sm h-100">
                    <div className="image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-100 mb-2 rounded"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="play-button">
                        <PlayCircle size={40} />
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="text-xl font-bold mb-2">{product.name}</h5>
                      <ul className="features-list ps-2 mb-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="mb-1 text-secondary">
                            <small>{feature}</small>
                          </li>
                        ))}
                      </ul>
                      <p className="price-tag mb-0">
                        <FontAwesomeIcon
                          icon={faTag}
                          className="price-icon me-2"
                        />
                        {product.currency} {product.price}
                      </p>
                      <div className="flex items-center justify-between mb-2 pt-2">
                        <div className="user-stats d-flex align-items-center mb-3">
                          <div className="user-icon-wrapper me-2">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="user-icon"
                            />
                          </div>
                          <span>
                            {product.rating}{" "}
                            {productOrderCounts[product.id] || 0}{" "}
                            {/* Tampilkan order count */}{" "}
                            {TextContent[language]?.times || "kali"}
                          </span>
                        </div>
                      </div>
                      <button
                        className="learn-more-btn"
                        onClick={() => handleCheckout(product)}>
                        {product.cta} <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      {/* PORTFOLIO */}
      <div className="portfolio py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Portofolio</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              modules={[Virtual, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3.2}
              navigation
              pagination={{ clickable: true }}
              onSwiper={setSwiperRef}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3.2,
                  spaceBetween: 50,
                },
              }}>
              {dataSwiper[language].map((swiper, index) => (
                <SwiperSlide
                  key={swiper.id}
                  virtualIndex={index}
                  className="shadow-sm rounded">
                  <ReactPlayer
                    url={swiper.video}
                    controls
                    width="100%"
                    height="auto"
                  />
                  <div className="people">
                    <img src={swiper.image} alt="" />
                    <div>
                      <h5 className="mb-1">{swiper.name}</h5>
                      <p className="m-0 fw-bold">{swiper.skill}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* <Disqus/> */}
    </div>
  );
};

HomePage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default HomePage;