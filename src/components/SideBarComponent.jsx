import { useState } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaHome,FaInfoCircle,FaCamera,FaGraduationCap,FaSignOutAlt,FaBars} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style/admin.css";
import logo from "../assets/logo.png"; // Pastikan path benar

const SideBarComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className={`sidebar-wrapper ${isOpen ? "open" : "closed"}`}>
      {/* Tombol toggle sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className="sidebar-container">
        <img src={logo} alt="Logo" className={`logo ${isOpen ? "large" : "small"}`} />

        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="/admin" className="nav-link">
              <FaHome className="me-2" /> {isOpen && "Beranda"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link">
              <FaCamera className="me-2" /> {isOpen && "Produk"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/tabelportofolio" className="nav-link">
              <FaGraduationCap className="me-2" /> {isOpen && "Portofolio"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/admin/faq" className="nav-link">
              <FaInfoCircle className="me-2" /> FAQ
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="logout">
          <Nav.Item>
            <Nav.Link href="#" className="nav-link" onClick={handleLogout}>
              <FaSignOutAlt className="me-2" /> {isOpen && "Logout"}
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
