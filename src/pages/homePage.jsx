import {Container, Row, Col} from 'react-bootstrap'
import HeroImage from '../assets/music-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const homePage = () => {
  return (
    <div className="homePage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className='header-content'>
            <Col md={6}>
              <h1 className="fw-bold">Create Your <span className="hub">Music</span> In Minutes</h1>
              <p className="fs-5">Nikmati pengalaman menciptakan musik dengan AI berkualitas profesional tanpa perlu studio mahal. Cukup unggah ide musikmu, dan biarkan AI kami membantu kamu menciptakan melodi artistik, aransemen profesional, dan berbagai karya menakjubkan lainnya.</p>
              <button className="cta-button">GET STARTED<FontAwesomeIcon icon={faArrowRight} /></button>
            </Col>
            <Col md={6} className='pt-lg-0 pt-5'>
              <img src={HeroImage} alt="hero" className="grid-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  )
}

export default homePage