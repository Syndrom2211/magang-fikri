import { useState } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaInfoCircle,
  FaCamera,
  FaGraduationCap,
  FaSignOutAlt,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style/admin.css";
import logo from "../assets/logo.png";
import lirikIcon from "../assets/lirik.png"; // Import logo lirik
import instrumenIcon from "../assets/instrumen.png"; // Import logo instrumen
import efekSuaraIcon from "../assets/efek_suara.png"; // Import logo efek suara

const SideBarComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleProductClick = (product) => {
    navigate(`/admin/produk/${product}`); // Navigasi ke halaman produk
  };

  return (
    <div className={`sidebar-wrapper ${isOpen ? "open" : "closed"}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className="sidebar-container">
        <img
          src={logo}
          alt="Logo"
          className={`logo ${isOpen ? "large" : "small"}`}
        />

        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="/admin" className="nav-link">
              <FaHome className="me-2" /> {isOpen && "Beranda"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={toggleProductDropdown}>
              <FaCamera className="me-2" /> {isOpen && "Produk"}{" "}
              <FaChevronDown className="ms-auto" />
            </Nav.Link>
            <div
              className={`product-dropdown ${
                isProductDropdownOpen ? "open" : ""
              }`}>
              <Nav.Link
                href="#"
                className="nav-link sub-menu"
                onClick={() => handleProductClick("lirik")}>
                <img src={lirikIcon} alt="Lirik" className="menu-icon" /> Lirik
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-link sub-menu"
                onClick={() => handleProductClick("instrumen")}>
                <img
                  src={instrumenIcon}
                  alt="Instrumen"
                  className="menu-icon"
                />{" "}
                Instrumen
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-link sub-menu"
                onClick={() => handleProductClick("efek-suara")}>
                <img
                  src={efekSuaraIcon}
                  alt="Efek Suara"
                  className="menu-icon"
                />{" "}
                Efek Suara
              </Nav.Link>
            </div>
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
