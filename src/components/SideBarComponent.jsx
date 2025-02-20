import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import {
  FaHome,
  FaInfoCircle,
  FaCamera,
  FaGraduationCap,
  FaSignOutAlt,
  FaBars,
  FaChevronDown,
  FaDesktop,
  FaEllipsisH,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import lirikIcon from "../assets/lirik.png";
import instrumenIcon from "../assets/instrumen.png";
import efekSuaraIcon from "../assets/efek_suara.png";
import "../style/sidebar.css";

const SideBarComponent = () => {
  const navigate = useNavigate();

  // Ambil status sidebar dari localStorage (atau default true jika belum ada)
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState ? JSON.parse(savedState) : true; // Default ke true jika tidak ada di localStorage
  });

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  // Simpan status sidebar ke localStorage setiap kali status berubah
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk toggle dropdown produk
  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Fungsi untuk navigasi ke produk
  const handleProductClick = (product) => {
    navigate(`/admin/produk/${product}`); // Use navigate to redirect
    setIsProductDropdownOpen(false); // Close dropdown after click
  };

  // Fungsi untuk menangani klik pada setiap nav-item
  const handleNavClick = (e, path) => {
    e.preventDefault(); // Mencegah default link behavior
    navigate(path); // Menggunakan navigate dari react-router
  };

  return (
    <div className={`sidebar-wrapper ${isOpen ? "open" : "closed"}`}>
      {/* Tombol toggle sidebar */}
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
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "/admin")}>
              <FaHome className="icon" />
              <span className="link-text">Beranda</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={(e) => toggleProductDropdown()}>
              <FaCamera className="icon" />
              <span className="link-text">Produk</span>
              <FaChevronDown className="dropdown-icon" />
            </Nav.Link>
            <div
              className={`product-dropdown ${
                isProductDropdownOpen ? "open" : ""
              }`}>
              <Nav.Link
                href="#"
                className="nav-link sub-menu"
                onClick={(e) => handleProductClick("lirik")}>
                <img src={lirikIcon} alt="Lirik" className="menu-icon" />
                <span className="link-text">Lirik</span>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-link sub-menu"
                onClick={(e) => handleProductClick("instrumen")}>
                <img
                  src={instrumenIcon}
                  alt="Instrumen"
                  className="menu-icon"
                />
                <span className="link-text">Instrumen</span>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-link sub-menu"
                onClick={(e) => handleProductClick("efek-suara")}>
                <img
                  src={efekSuaraIcon}
                  alt="Efek Suara"
                  className="menu-icon"
                />
                <span className="link-text">Efek Suara</span>
              </Nav.Link>
            </div>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "/tabelportofolio")}>
              <FaGraduationCap className="icon" />
              <span className="link-text">Portofolio</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "/adminheader")}>
              <FaDesktop className="icon" />
              <span className="link-text">Header</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "/adminfooter")}>
              <FaEllipsisH className="icon" />
              <span className="link-text">Footer</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "/admin/faq")}>
              <FaInfoCircle className="icon" />
              <span className="link-text">FAQ</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Logout Button */}
        <div className="logout">
          <Nav.Item>
            <Nav.Link href="#" className="nav-link" onClick={handleLogout}>
              <FaSignOutAlt className="icon" />
              <span className="link-text">Logout</span>
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;