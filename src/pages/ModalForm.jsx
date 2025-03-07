import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import HeroImage from "../assets/music-1.jpg";
import { checkout } from "../components/Checkoutmodal";
import { products } from "../data/index";

const ModalForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan, page, language } = location.state || {};

  // Get correct plan data from products
  const currentPlan = products[language]?.find(
    (product) => product.category === page && product.id === plan?.id
  );

  const [formData, setFormData] = useState({
    id: currentPlan?.id || plan?.id || null,
    item: currentPlan?.name || plan?.name || "",
    email: "",
    name: "",
    whatsapp: "",
    price: currentPlan?.price || plan?.price || 0,
  });

  // State untuk error form
  const [formErrors, setFormErrors] = useState({});

  // Redirect if no valid plan is found
  useEffect(() => {
    if (!page || !language || !plan) {
      navigate("/");
    }
  }, [page, language, plan, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email harus diisi";
    }
    if (!formData.name) {
      errors.name = "Nama harus diisi";
    }
    if (!formData.whatsapp) {
      errors.whatsapp = "WhatsApp harus diisi";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // true jika tidak ada error
  };

  const handleCheckout = async () => {
    if (validateForm()) {
      const formDataToSend = {
        ...formData,
        item_id: parseInt(formData.id, 10),
        id: parseInt(formData.id, 10),
      };
      const checkoutResult = await checkout(formDataToSend);
      if (checkoutResult) {
        navigate("/transaction-details", {
          state: { transactionData: formDataToSend },
        });
      }
    }
  };

  return (
    <div className="modal-form">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-card">
              <button
                onClick={() => navigate(-1)}
                className="back-link border-0 bg-transparent">
                ← Kembali
              </button>
              <img
                src={HeroImage}
                alt="Music Preview"
                className="preview-image"
              />
              <div className="form-content">
                <h2 className="form-title">Data Pemesanan:</h2>
                <form className="checkout-form">
                  {" "}
                  {/* Remove onSubmit */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.email && (
                    <p className="error">{formErrors.email}</p>
                  )}
                  <input
                    type="name"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.name && (
                    <p className="error">{formErrors.name}</p>
                  )}
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="No. WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.whatsapp && (
                    <p className="error">{formErrors.whatsapp}</p>
                  )}
                  <div className="order-summary">
                    <p>Item: {formData.item}</p>
                    <p>
                      Total: <strong>Rp.{formData.price}</strong>
                    </p>
                  </div>
                  <p className="form-note">
                    Setelah melakukan pembayaran, kamu akan mendapatkan link
                    download dalam email yang telah kamu masukkan.
                  </p>
                  <button
                    type="button" // Important: Change to button
                    className="submit-button"
                    onClick={handleCheckout} // Call handleCheckout
                  >
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
