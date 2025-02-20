import { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css";
import axios from "axios";

const FAQPage = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ id: null, question: "", answer: "" });
  const [faqs, setFaqs] = useState([]); // State untuk menyimpan data FAQ dari API

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

  const handleShow = (faq = { id: null, question: "", answer: "" }) => {
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
        // Update FAQ
        await axios.put(`/faq/${form.id}`, form);
      } else {
        // Tambah FAQ baru
        const response = await axios.post("/faq", form);
        // Setelah berhasil, tambahkan FAQ baru ke state dan tutup modal
        setFaqs([...faqs, response.data]);
      }
      fetchFaqs(); // Refresh data FAQ setelah update atau create
      setShow(false);
      setForm({ id: null, question: "", answer: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting FAQ:", error);
      // Handle error
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
                <th>Pertanyaan</th>
                <th>Jawaban</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq, index) => (
                <tr key={faq.id}>
                  <td>{index + 1}</td>
                  <td>{faq.question}</td>
                  <td>{faq.answer}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleShow(faq)} // Kirim data FAQ ke modal
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(faq.id)} // Panggil fungsi delete dengan ID
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal untuk menambah atau mengedit FAQ */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{form.id ? "Edit FAQ" : "Tambah FAQ"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Pertanyaan</Form.Label>
                  <Form.Control
                    type="text"
                    name="question"
                    value={form.question}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jawaban</Form.Label>
                  <Form.Control
                    type="text"
                    name="answer"
                    value={form.answer}
                    onChange={handleChange}
                  />
                </Form.Group>
                {/* Tambahkan form untuk kategori jika diperlukan */}
                <Form.Group className="mb-3">
                  <Form.Label>Kategori</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={form.category}
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
