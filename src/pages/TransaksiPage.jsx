import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import { Container, Row, Col, Table } from "react-bootstrap";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

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
    <div className="dashboard-container">
      <SideBarComponent />

      <div className="dashboard-content">
        <MainHeader />
        
        <div className="content-wrapper">
          <Container className="mt-4">
            <Row>
              <Col>
                <h1>Transaksi Produk: {product}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="table-container">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tanggal</th>
                        <th>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transaksi.map((t) => (
                        <tr key={t.id}>
                          <td>{t.id}</td>
                          <td>{t.tanggal}</td>
                          <td>{t.jumlah}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
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
        </div>
        <MainFooter />
      </div>
    </div>
  );
};

export default TransaksiPage;
