import SideBarComponent from '../components/SideBarComponent';
// import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import '../style/admin.css'; // Import file CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBarComponent />

      <div className="dashboard-content">

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
      </div>
    </div>
  );
};

export default Dashboard;
