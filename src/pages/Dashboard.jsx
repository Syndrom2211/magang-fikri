import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css";
import "../style/popup.css";
import axios from "axios";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const Dashboard = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [totalBiodata, setTotalBiodata] = useState(0); // State untuk total transaksi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [productLabels, setProductLabels] = useState([]); 
  // const [productData, setProductData] = useState([]);

  useEffect(() => {
    const isFirstLogin = sessionStorage.getItem("isFirstLogin");
    console.log("isFirstLogin:", isFirstLogin);

    if (isFirstLogin === "true") {
      setShowWelcomeModal(true);
      sessionStorage.setItem("isFirstLogin", "false");
    }

    const fetchTotalBiodata = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:1000/biodata/count"); // Endpoint baru
        setTotalBiodata(response.data.count);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching total biodata:", error);
      } finally {
        setLoading(false);
      }
    };

    // const fectProductData = async () => {
    //   try{
    //     const response = await axios.get("http://localhost:1000/biodata/count"); 
    //     const produk = response.data;
    //     const labels = produk.map((item) => item.nama_produk);
    //     const data = produk.map((item) => item.jumlah_terjual);

    //     setProductLabels(labels);
    //     setProductData(data);
    //   }catch (error) {
    //     console.error("Error fetching product data:", error);
    //   }
    // };

    fetchTotalBiodata();
    // fectProductData();
  }, []);

  // const barData = {
  //   labels: productLabels,
  //   datasets: [
  //     {
  //       label: "Jumlah Produk Terjual",
  //       data: productData,
  //       backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
  //       borderColor: ["#005BBB", "#009E75", "#FFAA00"],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  
  const barData = {
    labels: ["Produk A", "Produk B", "Produk C"],
    datasets: [
      {
        label: "Jumlah Produk Terjual",
        data: [120, 90, 140], // Contoh data
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
        borderColor: ["#005BBB", "#009E75", "#FFAA00"],
        borderWidth: 1,
      },
    ],
  };
  

  return (
    <div className="dashboard-container">
      <SideBarComponent />
      <div className="dashboard-content">
        <MainHeader />

        {/* Modal Welcome Message */}
        {showWelcomeModal && (
          <div className="modal-overlay">
            <div className="popup-content">
              <h2>⚠️ PERHATIAN ⚠️</h2>
              <p>Selamat datang di dashboard admin! 🎉</p>
              <button
                onClick={() => setShowWelcomeModal(false)}
                className="close-button">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Log status modal */}
        {console.log("Show Welcome Modal:", showWelcomeModal)}

        {/* Konten utama */}
        <div className="dashboard-main">
          <h2>Dasbor Admin</h2>

          <div className="d-flex justify-content aligin-items-center">
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Total Transaksi</h3>
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                <p>{totalBiodata}</p>
              )}
            </div>
          </div>

          
          <div className="chart-container">
            <h3>Statistik Produk</h3>
            <Bar data={barData} />
          </div>
          </div>
        </div>

        <MainFooter />
      </div>
    </div>
  );
};

export default Dashboard;
