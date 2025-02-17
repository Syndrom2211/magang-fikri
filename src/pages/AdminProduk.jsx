import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/tabelportfolio.css";
import axios from "axios"; // Import axios

const AdminProduk = () => {
  const { product } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:1000/biodata"); // Ganti dengan URL endpoint Anda
        const biodata = response.data;

        // Filter data berdasarkan product (misalnya, item)
        const filteredTransactions = biodata.filter(
          (item) => item.item === product
        );

        setTransactions(filteredTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        // Handle error, misalnya dengan menampilkan pesan ke user
        alert("Gagal mengambil data transaksi. Silakan coba lagi.");
      }
    };

    fetchTransactions();
  }, [product]);

  return (
    <div className="dashboard-container">
      <SideBarComponent />
      <div className="dashboard-content">
        <MainHeader />
        <div className="dashboard-content" style={{ flex: 1, padding: "20px" }}>
          <h2>Daftar Transaksi: {product}</h2>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Email</th>
                <th>No. Telp</th>
                <th>Waktu Transaksi</th>
                <th>Jumlah Transaksi</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.email}</td>
                  <td>{transaction.whatsapp}</td>{" "}
                  {/* Gunakan whatsapp karena phone tidak ada di biodata */}
                  <td>{transaction.created_at}</td>{" "}
                  {/* Gunakan created_at dari biodata */}
                  <td>{transaction.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <MainFooter />
      </div>
    </div>
  );
};

export default AdminProduk;
