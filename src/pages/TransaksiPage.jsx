import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalForm from "./ModalForm"; // Import ModalForm
import { Container, Row, Col, Table } from "react-bootstrap";

const TransaksiPage = () => {
  const { product } = useParams();
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    // Dummy data (ganti dengan data sesungguhnya dari API atau localStorage)
    const dummyTransaksi = {
      lirik: [{ id: 1, tanggal: "2024-08-01", jumlah: 10 }],
      instrumen: [{ id: 2, tanggal: "2024-08-02", jumlah: 5 }],
      "efek-suara": [{ id: 3, tanggal: "2024-08-03", jumlah: 15 }],
    };

    setTransaksi(dummyTransaksi[product] || []); // Filter data berdasarkan produk
  }, [product]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Transaksi Produk: {product}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tanggal</th>
                <th>Jumlah</th>
                {/* ... kolom lain */}
              </tr>
            </thead>
            <tbody>
              {transaksi.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.tanggal}</td>
                  <td>{t.jumlah}</td>
                  {/* ... cell lain */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalForm
            transaksi={transaksi}
            setTransaksi={setTransaksi}
            product={product}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TransaksiPage;
