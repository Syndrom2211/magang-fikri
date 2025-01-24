import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"


import homePage from "./pages/homePage"
import SupportPage from "./pages/SupportPage"
import ProductPage from "./pages/ProductPage"
import PortfolioPage from "./pages/PortfolioPage"
import FaqPage from "./pages/FaqPage"
import KatalogPage from "./pages/KatalogPage"


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={homePage}/>
        <Route path="/product" Component={ProductPage}/>
        <Route path="/support" Component={SupportPage}/>
        <Route path="/portfolio" Component={PortfolioPage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/katalog" Component={KatalogPage}/>
      </Routes>
      
      <FooterComponent />
    </div>
  )
}

export default App
