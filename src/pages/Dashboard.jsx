import { useEffect, useState } from "react";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css";
import "../style/popup.css";
import axios from "axios";

const Dashboard = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [totalBiodata, setTotalBiodata] = useState(0); // State untuk total transaksi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchTotalBiodata();
  }, []);

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
        </div>

        <MainFooter />
      </div>
    </div>
  );
};

export default Dashboard;
