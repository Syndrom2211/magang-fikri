import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FaqComponent from "./components/FaqComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/homePage";
import SupportPage from "./pages/SupportPage";
import ProductPage from "./pages/ProductPage";
import PortfolioPage from "./pages/PortfolioPage";
import KatalogPage from "./pages/KatalogPage";
import Dashboard from "./pages/Dashboard";
import Product1 from "./pages/Product1";

function App() {
  const location = useLocation(); // Ambil lokasi URL saat ini
  const isAdminPage = location.pathname.startsWith("/admin"); // Cek apakah halaman admin

  return (
    <div>
      {/* Tampilkan Navbar, FAQ, dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <NavbarComponent />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/katalog" element={<KatalogPage />} />
        <Route path="/Product1" element={<Product1 />} />
        <Route path="/admin/*" element={<Dashboard />} />
      </Routes>

      {/* Tampilkan FAQ dan Footer hanya jika bukan halaman admin */}
      {!isAdminPage && <FaqComponent />}
      {!isAdminPage && <FooterComponent />}
    </div>
  );
}

export default App;
