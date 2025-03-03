import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import NavbarComponent from "./components/NavbarComponent";
import FaqUserComponent from "./components/FaqUserComponent";
import FooterComponent from "./components/FooterComponent";
import CboxChat from "./components/CboxChat";

import HomePage from "./pages/homePage";
import SupportPage from "./pages/SupportPage";
import PortfolioPage from "./pages/PortfolioPage";
import LyricsPage from "./pages/LyricsPage";
import InstrumenPage from "./pages/InstrumentPage";
import SoundPage from "./pages/SoundPage";
import Dashboard from "./pages/Dashboard";
import AdminLoginPage from "./pages/AdminLoginPage";
import ModalForm from "./pages/ModalForm";
import FaqPage from "./pages/FaqPage";
import TabelPortofolio from "./pages/Adminportofolio";
import AdminProduk from "./pages/AdminProduk";
import AdminHeaderTable from "./pages/AdminHeader";
import AdminFooterTable from "./pages/AdminFooter";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:1000";

function App() {
  const location = useLocation();
  const [language, setLanguage] = useState("ID");

  // Define public routes where FAQ for users should be displayed
  const publicRoutes = [
    "/",
    "/support",
    "/portfolio",
    "/musik-lyric",
    "/musik-instrument",
    "/sound-effect",
  ];

  const isAdminPage =
    (location.pathname.startsWith("/admin") &&
      location.pathname !== "/admin/login") ||
    location.pathname === "/tabelportofolio" ||
    location.pathname === "/adminheader" ||
    location.pathname === "/adminfooter";

  const hideNavbarFooter =
    isAdminPage ||
    location.pathname === "/checkout" ||
    location.pathname === "/admin/login";

  // Check if the current route is a public route
  const isPublicRoute = publicRoutes.includes(location.pathname);

  return (
    <div>
      {/* Display Navbar only if it's not an admin page or checkout page */}
      {!hideNavbarFooter && (
        <NavbarComponent language={language} setLanguage={setLanguage} />
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/support" element={<SupportPage language={language} />} />
        <Route
          path="/portfolio"
          element={<PortfolioPage language={language} />}
        />
        <Route
          path="/musik-lyric"
          element={<LyricsPage language={language} />}
        />
        <Route
          path="/musik-instrument"
          element={<InstrumenPage language={language} />}
        />
        <Route
          path="/sound-effect"
          element={<SoundPage language={language} />}
        />
        <Route path="/checkout" element={<ModalForm />} />

        {/* Admin Login Page */}
        <Route
          path="/admin/login"
          element={<AdminLoginPage language={language} />}
        />

        {/* Admin Dashboard and Pages */}
        <Route path="/admin/*" element={<Dashboard language={language} />} />
        <Route path="/admin/faq" element={<FaqPage language={language} />} />

        {/* Tabel Portofolio */}
        <Route
          path="/tabelportofolio"
          element={<TabelPortofolio language={language} />}
        />

        {/* Tabel Produk */}
        <Route
          path="/admin/produk/:product"
          element={<AdminProduk language={language} />}
        />

        {/* Tabel Header */}
        <Route
          path="/adminheader"
          element={<AdminHeaderTable language={language} />}
        />

        {/* Tabel Footer */}
<<<<<<< HEAD
        <Route
          path="/adminfooter"
          element={<AdminFooterTable language={language} />}
        />
=======
        <Route path="/adminfooter" element={<AdminFooterTable />} />

>>>>>>> 3d61374055352ed7bab65ae3b72331721974f379
      </Routes>
      
      {/* Display Footer only for public pages */}
      {!hideNavbarFooter && <CboxChat />}

      {/* Display FAQ for users on all public routes */}
      {isPublicRoute && <FaqUserComponent language={language} />}

      {/* Display Footer only for public pages */}
      {!hideNavbarFooter && <FooterComponent language={language} />}
    </div>
  );
}

export default App;
