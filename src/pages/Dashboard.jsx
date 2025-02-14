import { useEffect, useState } from "react";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css"; 

const Dashboard = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const isFirstLogin = sessionStorage.getItem("isFirstLogin");

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
            <div className="modal-content">
              <h2>Informasi</h2>
              <p>Selamat datang di dashboard admin! 🎉</p>
              <button onClick={() => setShowWelcomeModal(false)} className="close-button">Close</button>
            </div>
          </div>
        )}

        {/* Konten utama */}
        <div className="dashboard-main">
          <h2>Admin Dashboard</h2>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Total Users</h3>
              <p>1,200</p>
            </div>
            <div className="dashboard-card">
              <h3>New Orders</h3>
              <p>350</p>
            </div>
            <div className="dashboard-card">
              <h3>Revenue</h3>
              <p>$4,500</p>
            </div>
            <div className="dashboard-card">
              <h3>Feedback</h3>
              <p>90%</p>
            </div>
          </div>
        </div>

        <MainFooter />
      </div>
    </div>
  );
};

export default Dashboard;
