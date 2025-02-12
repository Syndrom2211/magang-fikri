import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

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

function App() {
  const location = useLocation();
  const [language, setLanguage] = useState("ID");

  const isAdminPage =
    (location.pathname.startsWith("/admin") &&
      location.pathname !== "/admin/login") ||
    location.pathname === "/tabelportofolio";

  const hideNavbarFooter =
    isAdminPage ||
    location.pathname === "/checkout" ||
    location.pathname === "/admin/login";

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
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/admin/faq" element={<FaqPage />} />

        {/* Tabel Portofolio */}
        <Route path="/tabelportofolio" element={<TabelPortofolio />} />

        {/* Tabel Produk */}
        <Route path="/admin/produk/:product" element={<AdminProduk />} />
      </Routes>

      {/* Display Footer only for public pages */}

      {!hideNavbarFooter && <FooterComponent language={language} />}
    </div>
  );
}

export default App;
