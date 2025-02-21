import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/tabelportfolio.css";

const AdminHeaderTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [headerData, setHeaderData] = useState([
    { id: 1, title: "Dropdown Transaksi", subtitle: "Produk" },
    { id: 2, title: "Dropdown Kontak", subtitle: "Dukungan" },
  ]);
  const [editedHeader, setEditedHeader] = useState({});

  const handleEdit = (data) => {
    setEditedHeader(data);
    setShowModal(true);
  };

  const handleSave = () => {
    setHeaderData(
      headerData.map((header) =>
        header.id === editedHeader.id ? editedHeader : header
      )
    );
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedHeader({ ...editedHeader, [name]: value });
  };

  return (
    <div className="dashboard-container">
      <SideBarComponent />

      <div className="dashboard-content">
        <MainHeader />

        <div className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
        <h2>CRUD Header</h2>
        <div className="table-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Posisi</th>
                <th>Konten</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {headerData.map((header) => (
                <tr key={header.id}>
                  <td>{header.id}</td>
                  <td>{header.title}</td>
                  <td>{header.subtitle}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEdit(header)}>
                      Edit
                    </Button> {''}    
                    <Button variant="danger" size="sm" onClick={() => handleHapus(header.id)}>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Header</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Posisi</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editedHeader.title || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Konten</Form.Label>
                <Form.Control
                  type="text"
                  name="subtitle"
                  value={editedHeader.subtitle || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <MainFooter />
      </div>
    </div>
  );
};

export default AdminHeaderTable;
