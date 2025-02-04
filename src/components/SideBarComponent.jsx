import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaInfoCircle, FaCamera, FaGraduationCap, FaSignOutAlt, FaBars } from 'react-icons/fa';
import '../style/admin.css';
import logo from "../assets/logo.png"; // Pastikan path ini benar

const SideBarComponent = () => {
  const [isOpen, setIsOpen] = useState(true); // Default sidebar terbuka

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-wrapper">
      {/* Tombol untuk membuka/menutup sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
        <img src={logo} alt="Logo" className="logo" />

        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="#" className="nav-link">
              <FaHome className="me-2" /> Beranda
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link">
              <FaCamera className="me-2" /> Produk
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link">
              <FaGraduationCap className="me-2" /> Portofolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link">
              <FaInfoCircle className="me-2" /> FAQ
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="logout">
          <Nav.Item>
            <Nav.Link href="#" className="nav-link">
              <FaSignOutAlt className="me-2" /> Logout
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
