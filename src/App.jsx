import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FaqComponent from "./components/FaqComponent"
import FooterComponent from "./components/FooterComponent"

import homePage from "./pages/HomePage"
import SupportPage from "./pages/SupportPage"
import PortfolioPage from "./pages/PortfolioPage"
import KatalogPage from "./pages/KatalogPage"
import LyricPage from "./pages/LyricPage"
import InstrumenPage from "./pages/InstrumenPage.jsx"
import SoundPage from "./pages/SoundPage.jsx"


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={homePage}/>
        <Route path="/support" Component={SupportPage}/>
        <Route path="/portfolio" Component={PortfolioPage}/>
        <Route path="/katalog" Component={KatalogPage}/>
        <Route path="/lyric" Component={LyricPage}/>
        <Route path="/instrumen" Component={InstrumenPage} />
        <Route path="/sound" Component={SoundPage} />
      </Routes>
      
      <FaqComponent />
      <FooterComponent />
    </div>
  )
}

export default App;
