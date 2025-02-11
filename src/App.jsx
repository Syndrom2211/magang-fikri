import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';

import NavbarComponent from "./components/NavbarComponent";
import FaqComponent from "./components/FaqComponent";
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

function App() {
  const location = useLocation(); // Ambil lokasi URL saat ini
  const isAdminPage =
    location.pathname.startsWith("/admin") &&
    location.pathname !== "admin/login"|| // Cek apakah halaman admin
    location.pathname === "/tabelportofolio"; // Cek apakah halaman tabel portofolio
  const [language, setLanguage] = useState('ID');

  return (
    <div>
      {/* Tampilkan Navbar hanya jika bukan halaman admin dan halaman ModalForm */}
      {!isAdminPage && location.pathname !== "/checkout" && (
        <NavbarComponent language={language} setLanguage={setLanguage} />
      )}

      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/support" element={<SupportPage language={language} />} />
        <Route path="/portfolio" element={<PortfolioPage language={language}/>} />
        <Route path="/musik-lyric" element={<LyricsPage language={language}/>} />
        <Route path="/musik-instrument" element={<InstrumenPage language={language}/>} />
        <Route path="/sound-effect" element={<SoundPage language={language}/>} />
        <Route path="/admin/login" element={<AdminLoginPage language={language}/>} />{" "}
        <Route path="/checkout" element={<ModalForm />} />
        <Route path="/tabelportofolio" element={<TabelPortofolio />} />
        
        {/* Admin Login Page Route */}
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/admin/faq" element={<FaqPage />} />
      </Routes>

      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <FaqComponent language={language}/>}
      {!isAdminPage && location.pathname !== "/checkout" && (
        <FaqComponent />
      )}
      {!isAdminPage && <FooterComponent language={language}/>}
    </div>
  );
}

export default App;
