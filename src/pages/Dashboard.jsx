import { useEffect, useState } from "react";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css"; 
import "../style/popup.css";

const Dashboard = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const isFirstLogin = sessionStorage.getItem("isFirstLogin");
    console.log("isFirstLogin:", isFirstLogin);

    if (isFirstLogin === "true") {
      setShowWelcomeModal(true); // Tampilkan modal saat pertama kali login
      sessionStorage.setItem("isFirstLogin", "false"); // Supaya modal tidak muncul lagi setelah refresh
    }
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
              <button onClick={() => setShowWelcomeModal(false)} className="close-button">Tutup</button>
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
              <p>350</p>
            </div>
          </div>
        </div>

        <MainFooter />
      </div>
    </div>
  );
};

export default Dashboard;