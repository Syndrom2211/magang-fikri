import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from '../components/SideBarComponent';
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css";

const FAQPage = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ id: null, question: "", answer: "" });

  const handleShow = (faq = { id: null, question: "", answer: "" }) => {
    setForm(faq);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Hanya menutup modal tanpa menyimpan data
    setShow(false);
  };

  return (
    <div className="dashboard-container">
      <SideBarComponent />
      
      <div className="dashboard-content">
        <MainHeader />
        
        <div className="dashboard-main" style={{ flex: 1, padding: "20px" }}>
          <h2>FAQ Management</h2>
          <Button variant="primary" onClick={() => handleShow()} className="mt-3">Tambah FAQ</Button>
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
              {/* Daftar FAQ hanya contoh, bisa diubah atau dipelihara secara statis */}
              <tr>
                <td>1</td>
                <td>Apa itu React?</td>
                <td>React adalah library JavaScript untuk membangun antarmuka pengguna.</td>
                <td>
                  <Button variant="warning" size="sm">Edit</Button>{' '}
                  <Button variant="danger" size="sm">Hapus</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Apa itu JSX?</td>
                <td>JSX adalah ekstensi sintaksis untuk JavaScript yang digunakan oleh React.</td>
                <td>
                  <Button variant="warning" size="sm">Edit</Button>{' '}
                  <Button variant="danger" size="sm">Hapus</Button>
                </td>
              </tr>
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
                  <Form.Control type="text" name="question" value={form.question} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jawaban</Form.Label>
                  <Form.Control type="text" name="answer" value={form.answer} onChange={handleChange} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Batal</Button>
              <Button variant="primary" onClick={handleSubmit}>Simpan</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <MainFooter />
      </div>
    </div>
  );
};

export default FAQPage;
