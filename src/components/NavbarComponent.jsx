import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);
  const [language, setLanguage] = useState("ID");

  const scrollToTop = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "ID" ? "EN" : "ID");
  };

  useEffect(() => {
    scrollToTop();
    window.addEventListener("scroll", scrollToTop);
  });

  return (
    <div>
      <Navbar expand="lg" className={scroll ? "navbar-active" : "navbar"}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <span>CreativeMusic</span>
            <span className="hub">Hub</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className="nav-item">
                <Nav.Link href="/">Home</Nav.Link>
              </div>
              <div className="nav-item">
                <NavDropdown title="Product" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/product" className="dropdown-item">
                    Pembuatan music Under 1 Minute
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="nav-item">
                <NavDropdown title="Support" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/support" className="dropdown-item">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="http://www.instagram.com"
                    className="dropdown-item"
                  >
                    Instagram
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="nav-item">
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </div>
            </Nav>

            <div className="text-center">
              <button
                className="btn btn-outline-warning rounded-1"
                onClick={toggleLanguage}
              >
                {language}
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
