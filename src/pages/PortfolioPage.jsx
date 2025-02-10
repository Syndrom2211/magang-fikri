import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from '../components/SideBarComponent';
import { dataSwiper } from "../data/index"; // Ambil data dari dataSwiper

const PortfolioPage = ({language}) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
const PortfolioTable = () => {
  const [portfolios, setPortfolios] = useState(dataSwiper); // Pakai data dari dataSwiper
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

  return (
    <div className="homePage portfolio">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
          <Col>
            <h1 className="text-center fw-bold my-3" style={{ letterSpacing: "2px" }}>
              {portfolioSectionData[language].title}
            </h1>
            <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#ff6b6b" }}>
              {portfolioSectionData[language].description}
            </p>
          </Col>
          </Row>
          <Row className="mb-4 text-center">
            {genres.map((genre) => (
              <Col key={genre}>
                <Button 
                  variant={selectedGenre === genre ? "success" : "outline-success"} 
                  onClick={() => setSelectedGenre(genre)}
                  className="m-1"
                >
                  {genre}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="header-content g-4">
            {filteredVideos[language].map((item) => (
              <Col key={item.id} sm={6} md={4}>
                <div className="video-card shadow-sm rounded p-1 bg-success-subtle text-success">
                  <ReactPlayer url={item.video} controls width="100%" height="auto" />
                </div>
                <Col>
                  <div className="d-flex flex-column align-items-start">
                    <h4 className="fw-bold my-2 text-uppercase text-light" style={{ letterSpacing: "2px", fontFamily: "Workbench" }}>
                      {item.name}
                    </h4>
                    <p className="mb-2 text-light" style={{ fontSize: "1.2rem", fontFamily: "Tulpen One" }}>
                      {item.description}
                    </p>
                  </div>
                </Col>
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    <div className="dashboard-container" style={{ display: "flex" }}>
      <SideBarComponent />

      <div className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
        <h2>CRUD Portfolio</h2>
        <Button variant="primary" onClick={() => handleShow()}>Tambah Portfolio</Button>
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

PortfolioPage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default PortfolioTable;
