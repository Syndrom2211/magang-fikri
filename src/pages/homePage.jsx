import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/music-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { products, dataSwiper } from "../data/index";
import { Star, PlayCircle } from "lucide-react";
import { useRef, useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { useNavigate } from "react-router-dom";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomePage = () => {
  const catalogRef = useRef(null);
  const navigate = useNavigate();
  const [setSwiperRef] = useState(null);

  const scrollToCatalog = () => {
    catalogRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homePage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-content">
            <Col md={6}>
              <h1 className="fw-bold">
                Create Your <span className="hub">Music</span> In Minutes
              </h1>
              <p className="fs-5">
                Jadikan inspirasimu sebuah mahakarya dengan AI canggih. Tanpa
                perlu studio mahal, cukup unggah ide musikmu, dan biarkan AI
                kami menyulapnya menjadi melodi artistik serta aransemen
                profesional dalam hitungan menit.
              </p>
              <button className="cta-button" onClick={scrollToCatalog}>
                GET STARTED
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Col>
            <Col md={6} className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero" className="grid-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="catalog w-100 min-vh-100" ref={catalogRef}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Catalog</h1>
              <p className="text-center">
                Ciptakan Musik impianmu dengan mudah hanya dalam hitungan menit
              </p>
            </Col>
          </Row>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <Row className="g-4">
              {products.map((product) => (
                <Col
                  key={product.id}
                  md={4}
                  sm={6}
                  className="shadow-sm rounded"
                >
                  <div className="product-card p-3 border rounded shadow-sm h-100">
                    <div className="image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-100 mb-3 rounded"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="play-button">
                        <PlayCircle size={40} />
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="text-xl font-bold mb-2">{product.name}</h5>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4" />{" "}
                          <span className="ml-1">{product.rating}</span>
                        </div>
                      </div>
                      {/* <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div> */}
                      <button className="learn-more-btn">
                        {product.cta} <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-center">
                <button
                  className="cta-catalog-button"
                  onClick={() => navigate("/product")}
                >
                  Lihat Semua <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="portfolio py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Portfolio</h1>
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
              }}
            >
              {dataSwiper.map((swiper, index) => (
                <SwiperSlide
                  key={swiper.id}
                  virtualIndex={index}
                  className="shadow-sm rounded"
                >
                  <p className="desc">{swiper.desc}</p>
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
    </div>
  );
};

export default HomePage;
