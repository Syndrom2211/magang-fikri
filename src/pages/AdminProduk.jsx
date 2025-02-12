import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/tabelportfolio.css";

const AdminProduk = () => {
  const { product } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Data transaksi statis (ganti dengan data Anda jika ada)
    const transactionData = {
      lirik: [
        {
          id: 1,
          name: "User 1",
          email: "user1@example.com",
          phone: "123-456-7890",
          time: "2024-10-29 10:00",
          amount: 150000,
        },
        {
          id: 2,
          name: "User 2",
          email: "user2@example.com",
          phone: "987-654-3210",
          time: "2024-10-29 11:30",
          amount: 200000,
        },
        // ... more lyrics transactions data
      ],
      instrumen: [
        {
          id: 3,
          name: "User 3",
          email: "user3@example.com",
          phone: "555-123-4567",
          time: "2024-10-29 14:45",
          amount: 75000,
        },
        {
          id: 4,
          name: "User 4",
          email: "user4@example.com",
          phone: "111-222-3333",
          time: "2024-10-29 16:00",
          amount: 120000,
        },
        // ... more instruments transactions data
      ],
      "efek-suara": [
        {
          id: 5,
          name: "User 5",
          email: "user5@example.com",
          phone: "444-555-6666",
          time: "2024-10-29 18:30",
          amount: 90000,
        },
        {
          id: 6,
          name: "User 6",
          email: "user6@example.com",
          phone: "777-888-9999",
          time: "2024-10-29 20:00",
          amount: 180000,
          itemType: "Sound Effect", // Menambahkan jenis item
        },
        // ... more sound effects transactions data
      ],
    };

    setTransactions(transactionData[product] || []);
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
                <th>Jenis Item</th> {/* Kolom Jenis Item ditambahkan */}
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.email}</td>
                  <td>{transaction.phone}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.itemType}</td> {/* Tampilkan jenis item */}
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
