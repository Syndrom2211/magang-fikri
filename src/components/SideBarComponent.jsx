import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaInfoCircle,
  FaCamera,
  FaGraduationCap,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Impor useNavigate
import "../style/admin.css";
import logo from "../assets/logo.png"; // Pastikan path ini benar

const SideBarComponent = () => {
  const [isOpen, setIsOpen] = useState(true); // Default sidebar terbuka
  const navigate = useNavigate(); // Inisialisasi navigate

  // Mengecek apakah admin sudah login berdasarkan keberadaan token
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin/login"); // Redirect ke halaman login jika token tidak ada
    }
  }, [navigate]);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi logout
  const handleLogout = () => {
    // Hapus token atau sesi yang disimpan
    localStorage.removeItem("adminToken");

    // Redirect ke halaman login
    navigate("/admin/login");
  };

  return (
    <div className="sidebar-wrapper">
      {/* Tombol untuk membuka/menutup sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
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
            <Nav.Link href="#" className="nav-link" onClick={handleLogout}>
              <FaSignOutAlt className="me-2" /> Logout
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
