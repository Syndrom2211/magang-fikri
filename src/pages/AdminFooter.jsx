import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/tabelportfolio.css";

const AdminFooterTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [footerData, setFooterData] = useState([
    { id: 1, title: "Email", subtitle: "yukmari2211@gmail.com" },
    { id: 2, title: "Alamat", subtitle: "Komplek Bandung Indah Raya, Blok C13/No.17, Kelurahan Mekarjaya, Kecamatan Rancasari, Kota Bandung, Jawa Barat 40286" },
  ]);
  const [editedFooter, setEditedFooter] = useState({});

  const handleEdit = (data) => {
    setEditedFooter(data);
    setShowModal(true);
  };

  const handleSave = () => {
    setFooterData(
      footerData.map((footer) =>
        footer.id === editedFooter.id ? editedFooter : footer
      )
    );
    setShowModal(false);
  };

  const handleHapus = (id) => {
    setFooterData(footerData.filter((footer) => footer.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFooter({ ...editedFooter, [name]: value });
  };

  return (
    <div className="dashboard-container">
      <SideBarComponent />

      <div className="dashboard-content">
        <MainHeader />

        <div className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
          <h2>CRUD Footer</h2>
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
                {footerData.map((footer) => (
                  <tr key={footer.id}>
                    <td>{footer.id}</td>
                    <td>{footer.title}</td>
                    <td>{footer.subtitle}</td>
                    <td>
                      <Button variant="warning" size="sm" onClick={() => handleEdit(footer)}>
                        Edit
                      </Button>{' '}
                      <Button variant="danger" size="sm" onClick={() => handleHapus(footer.id)}>
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
            <Modal.Title>Edit Footer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Posisi</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editedFooter.title || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Konten</Form.Label>
                <Form.Control
                  type="text"
                  name="subtitle"
                  value={editedFooter.subtitle || ""}
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

export default AdminFooterTable;
