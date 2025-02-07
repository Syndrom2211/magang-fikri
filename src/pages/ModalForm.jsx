import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/music-1.jpg";
import { checkout } from "../components/Checkoutmodal";

const ModalForm = () => {
  const [formData, setFormData] = useState({
    id: 1,
    item : "Musik Indah (MP3)",
    email: "",
    name: "",
    whatsapp: "",
    price : 100000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pembayaran diproses!");
  };

  return (
    <div className="modal-form">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-card">
              <a href="#" className="back-link">
                ← Kembali
              </a>
              <img
                src={HeroImage}
                alt="Music Preview"
                className="preview-image"
              />
              <div className="form-content">
                <h2 className="form-title">Data Pemesanan:</h2>
                <form onSubmit={handleSubmit} className="checkout-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="No. WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                  <div className="order-summary">
                    <p>Item: {formData.item}</p>
                    <p>Total: <strong>Rp.{formData.price}</strong></p>
                  </div>
                  <p className="form-note">
                    Setelah melakukan pembayaran, kamu akan mendapatkan link
                    download dalam email yang telah kamu masukkan.
                  </p>
                  <button type="submit" className="submit-button" onClick={() => checkout(formData)}>
                    Pilih Pembayaran
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ModalForm;