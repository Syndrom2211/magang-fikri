import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from '../components/SideBarComponent';
import { dataSwiper } from "../data/index"; // Mengambil data dari dataSwiper
import "../style/tabelportfolio.css";

const PortfolioTable = () => {
  // Menambahkan state untuk bahasa
  const [language, setLanguage] = useState("ID");
  const [portfolios, setPortfolios] = useState(dataSwiper[language] || []);
  
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", genre: "", description: "" });

  const handleShow = (portfolio = { id: null, name: "", genre: "", description: "" }) => {
    setForm(portfolio);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.id) {
      setPortfolios(portfolios.map((p) => (p.id === form.id ? form : p)));
    } else {
      setPortfolios([...portfolios, { ...form, id: portfolios.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setPortfolios(portfolios.filter((p) => p.id !== id));
  };

  // Mengubah bahasa dan memperbarui daftar portfolio
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setPortfolios(dataSwiper[lang] || []);
  };

  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <SideBarComponent />
      <div className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
        <h2>CRUD Portfolio</h2>
        <div>
          <Button variant={language === "ID" ? "primary" : "secondary"} onClick={() => handleLanguageChange("ID")}>
            Bahasa Indonesia
          </Button>
          <Button variant={language === "EN" ? "primary" : "secondary"} onClick={() => handleLanguageChange("EN")} className="ms-2">
            English
          </Button>
        </div>
        <Button variant="primary" onClick={() => handleShow()} className="mt-3">Tambah Portfolio</Button>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Genre</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio) => (
              <tr key={portfolio.id}>
                <td>{portfolio.id}</td>
                <td>{portfolio.name}</td>
                <td>{portfolio.genre}</td>
                <td>{portfolio.description}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleShow(portfolio)}>Edit</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(portfolio.id)}>Hapus</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{form.id ? "Edit Portfolio" : "Tambah Portfolio"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control type="text" name="genre" value={form.genre} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control type="text" name="description" value={form.description} onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Batal</Button>
            <Button variant="primary" onClick={handleSubmit}>Simpan</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default PortfolioTable;
