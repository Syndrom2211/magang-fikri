import { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css";
import axios from "axios";

const FAQPage = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    id: null,
    question_id: "",
    answer_id: "",
    question_en: "",
    answer_en: "",
  });
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Ambil data FAQ dari API saat komponen di-mount
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get("/faq");
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      // Handle error, misalnya dengan menampilkan pesan ke user
    }
  };

  const handleShow = (
    faq = {
      id: null,
      question_id: "",
      answer_id: "",
      question_en: "",
      answer_en: "",
    }
  ) => {
    setForm(faq);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (form.id) {
        await axios.put(`/faq/${form.id}`, form);
      } else {
        const response = await axios.post("/faq", form);
        setFaqs([...faqs, response.data]);
      }
      fetchFaqs();
      setShow(false);
      setForm({
        id: null,
        question_id: "",
        answer_id: "",
        question_en: "",
        answer_en: "",
      });
    } catch (error) {
      console.error("Error submitting FAQ:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/faq/${id}`);
      fetchFaqs(); // Refresh data FAQ setelah delete
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      // Handle error
    }
  };

  return (
    <div className="dashboard-container">
      <SideBarComponent />
      <div className="dashboard-content">
        <MainHeader />
        <div className="dashboard-main" style={{ flex: 1, padding: "20px" }}>
          <h2>FAQ Management</h2>
          <Button
            variant="primary"
            onClick={() => handleShow()}
            className="mt-3">
            Tambah FAQ
          </Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Pertanyaan (ID)</th>
                <th>Jawaban (ID)</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq, index) => (
                <tr key={faq.id}>
                  <td>{index + 1}</td>
                  <td>{faq.question_id}</td>
                  <td>{faq.answer_id}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleShow(faq)}>
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(faq.id)}>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{form.id ? "Edit FAQ" : "Tambah FAQ"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Pertanyaan (ID)</Form.Label>
                  <Form.Control
                    type="text"
                    name="question_id"
                    value={form.question_id}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jawaban (ID)</Form.Label>
                  <Form.Control
                    type="text"
                    name="answer_id"
                    value={form.answer_id}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Pertanyaan (EN)</Form.Label>
                  <Form.Control
                    type="text"
                    name="question_en"
                    value={form.question_en}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jawaban (EN)</Form.Label>
                  <Form.Control
                    type="text"
                    name="answer_en"
                    value={form.answer_en}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Batal
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Simpan
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <MainFooter />
      </div>
    </div>
  );
};

export default FAQPage;
