import { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import "../style/admin.css";

const FAQTableComponent = () => {
  const [faqs, setFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [editingFAQ, setEditingFAQ] = useState(null);

  useEffect(() => {
    // Fetch FAQs from the database
    axios.get("http://localhost:1000/admin/faqs").then((response) => {
      setFaqs(response.data);
    });
  }, []);

  const handleSave = () => {
    if (editingFAQ) {
      // Update FAQ
      axios
        .put(`http://localhost:1000/admin/faqs/${editingFAQ.id}`, {
          question: newQuestion,
          answer: newAnswer,
        })
        .then(() => {
          setFaqs((prev) =>
            prev.map((faq) =>
              faq.id === editingFAQ.id
                ? { ...faq, question: newQuestion, answer: newAnswer }
                : faq
            )
          );
          setShowModal(false);
          setEditingFAQ(null);
        });
    } else {
      // Add new FAQ
      axios
        .post("http://localhost:1000/admin/faqs", {
          question: newQuestion,
          answer: newAnswer,
        })
        .then((response) => {
          setFaqs((prev) => [...prev, response.data]);
          setShowModal(false);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1000/admin/faqs/${id}`).then(() => {
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    });
  };

  const handleEdit = (faq) => {
    setEditingFAQ(faq);
    setNewQuestion(faq.question);
    setNewAnswer(faq.answer);
    setShowModal(true);
  };

  return (
    <div className="faq-table">
      <h2>FAQ Management</h2>
      <Button
        variant="primary"
        onClick={() => {
          setEditingFAQ(null);
          setNewQuestion("");
          setNewAnswer("");
          setShowModal(true);
        }}
        className="mb-3"
      >
        Tambah Pertanyaan
      </Button>
      <Table striped bordered hover>
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
                  className="me-2"
                  onClick={() => handleEdit(faq)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(faq.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingFAQ ? "Edit FAQ" : "Add New FAQ"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FAQTableComponent;
