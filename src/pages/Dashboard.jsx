import "react";
import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../style/admin.css"; // Import file CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBarComponent />

      <div className="dashboard-content">
        <MainHeader />

        {/* Konten utama */}
        <div className="dashboard-main">
          <h2>Admin Dashboard</h2>

          {/* Card Container */}
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
