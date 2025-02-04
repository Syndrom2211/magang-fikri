import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FaqComponent from "./components/FaqComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import PortfolioPage from "./pages/PortfolioPage";
import KatalogPage from "./pages/KatalogPage";
import LyricPage from "./pages/LyricPage";
import InstrumenPage from "./pages/InstrumenPage.jsx";
import SoundPage from "./pages/SoundPage.jsx";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation(); // Ambil lokasi URL saat ini
  const isAdminPage = location.pathname.startsWith("/admin"); // Cek apakah halaman admin

  return (
    <div>
      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/katalog" element={<KatalogPage />} />
        <Route path="/lyric" element={LyricPage} />
        <Route path="/instrumen" element={InstrumenPage} />
        <Route path="/sound" element={SoundPage} />
        <Route path="/admin/*" element={<Dashboard />} />
      </Routes>

      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <FaqComponent />}
      {!isAdminPage && <FooterComponent />}
    </div>
  );
}

export default App;
