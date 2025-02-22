import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLinks, DropdownLinks } from "../data/index";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = ({ language, setLanguage }) => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scroll ? "navbar navbar-active" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          <span>CreativeMusic</span>
          <span className="hub">Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Tambahkan pengecekan supaya tidak error */}
            {NavLinks[language] && NavLinks[language].length > 0 ? (
              NavLinks[language].map((link, index) => (
                <div className="nav-item" key={link.id}>
                  {DropdownLinks[language] && DropdownLinks[language][index] ? (
                    <NavDropdown 
                    title={
                      <>
                        {link.name}
                        <FontAwesomeIcon 
                          icon={faChevronRight} 
                          className="dropdown-arrow ms-2"
                        />
                      </>
                    } 
                    id={`dropdown-${link.id}`}
                  >
                      {DropdownLinks[language][index].map((item, i) => (
                        <NavDropdown.Item key={i} href={item.path}>
                          {item.name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <Nav.Link
                      href={link.path}
                      className={
                        location.pathname === link.path ? "active" : ""
                      }
                    >
                      {link.name}
                    </Nav.Link>
                  )}
                </div>
              ))
            ) : (
              <p>Loading menu...</p>
            )}
          </Nav>

          <div className="text-center">
            <button
              className="btn btn-outline-warning rounded-1"
              onClick={() =>
                setLanguage((prev) => (prev === "ID" ? "EN" : "ID"))
              }
            >
              {language}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default NavbarComponent;
