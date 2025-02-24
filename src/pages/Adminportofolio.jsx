import { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/tabelportfolio.css";
import axios from "axios";

const PortfolioTable = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    genre: "",
    description: "",
    video: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:1000/portfolios");
        setPortfolios(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching portfolios:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const handleShow = (
    portfolio = { id: null, name: "", genre: "", description: "" }
  ) => {
    setForm(portfolio);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (e) => {
    setForm({ ...form, video: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("genre", form.genre);
    formData.append("description", form.description);
    if (form.video) {
      formData.append("video", form.video);
    }

    try {
      if (form.id) {
        await axios.put(
          `http://localhost:1000/portfolios/${form.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:1000/portfolios", formData);
      }
      handleClose();
      // Refresh data after successful submit
      const response = await axios.get("http://localhost:1000/portfolios");
      setPortfolios(response.data);
    } catch (error) {
      console.error("Error submitting portfolio:", error);
      setError("Terjadi kesalahan saat menyimpan data.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/portfolios/${id}`);
      // Refresh data after successful delete
      const response = await axios.get("http://localhost:1000/portfolios");
      setPortfolios(response.data);
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      setError("Terjadi kesalahan saat menghapus data.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <SideBarComponent />
      <div className="dashboard-content">
        <MainHeader />
        <div className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
          <h2>CRUD Portfolio</h2>
          <Button
            variant="primary"
            onClick={() => handleShow()}
            className="mt-3">
            Tambah Portfolio
          </Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Genre</th>
                <th>Deskripsi</th>
                <th>Video</th>
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
                    {portfolio.video && (
                      <video
                        src={`http://localhost:1000/uploads/${portfolio.video}`}
                        controls
                        width="200"
                      />
                    )}
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleShow(portfolio)}>
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(portfolio.id)}>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {form.id ? "Edit Portfolio" : "Tambah Portfolio"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    value={form.genre}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Video</Form.Label>
                  <Form.Control
                    type="file"
                    name="video"
                    accept="video/*"
                    onChange={handleVideoChange}
                  />
                  {form.video && (
                    <video
                      src={URL.createObjectURL(form.video)}
                      controls
                      width="200"
                    />
                  )}
                  {form.video && typeof form.video === "string" && (
                    <video
                      src={`http://localhost:1000/uploads/${form.video}`}
                      controls
                      width="200"
                    />
                  )}
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

export default PortfolioTable;
