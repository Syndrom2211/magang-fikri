import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import "../style/admin.css"; // Import style

const MainHeader = () => {
  // Event handler ketika icon diklik
  const handleSearchClick = () => {
    alert("Fitur pencarian belum tersedia!"); // Ganti dengan aksi sesuai kebutuhan
  };

  const handleNotificationClick = () => {
    alert("Tidak ada notifikasi baru.");
  };

  const handleProfileClick = () => {
    alert("Menu profil akan muncul.");
  };

  return (
    <nav className="dashboard-header">
      <h4>WELCOME TO ADMIN CREATIVE MUSIC HUB</h4>

      <div className="header-icons">
        <FaSearch className="icon" onClick={handleSearchClick} />
        <FaBell className="icon" onClick={handleNotificationClick} />
        <FaUserCircle className="icon user-icon" onClick={handleProfileClick} />
      </div>
    </nav>
  );
};

export default MainHeader;
