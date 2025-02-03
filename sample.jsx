import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import logo from "../../images/brand.svg";
import { Link as Routerlink } from "react-router-dom";

const Navbar = () => {
  const [customBg, setCustomBg] = useState("");
  const [navFont, setNavFont] = useState("");
  const [hamburger, setHamburger] = useState("dark");
  // Navbar collapse
  const [expanded, setExpanded] = useState(false);

  const current = "";

  //Navbar BG change on Scroll
  const scrollHandler = () => {
    if (window.pageYOffset > 50) {
      setNavFont("nav-col");
      setCustomBg("nav-bg");
      setHamburger("light");
    } else {
      setNavFont("");
      setCustomBg("");
      setHamburger("dark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <div>
      <NavBar
        expand="lg"
        className={`nav-header ${customBg}`}
        variant={hamburger}
        expanded={expanded}
      >
        <Container>
          <NavBar.Brand href="#home">
            <img src={logo} alt="" className="brand-img" />
          </NavBar.Brand>
          <h2 className="main-heading">Screener</h2>
          <NavBar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-items  ml-auto">
              <Link to="home" smooth={true} duration={1000}>
                {" "}
                <Nav.Link
                  eventKey="home"
                  className={`mt-2 ${navFont} ${current}`}
                  onClick={() => setExpanded(false)}
                >
                  Home
                </Nav.Link>
              </Link>
              <Link to="about" smooth={true} duration={1000}>
                <Nav.Link
                  className={`mt-2 ${navFont} ${current}`}
                  eventKey="about"
                  onClick={() => setExpanded(false)}
                >
                  {" "}
                  About
                </Nav.Link>
              </Link>
              <Link to="services" smooth={true} duration={1000}>
                <Nav.Link
                  className={`mt-2 ${navFont}  ${current}`}
                  eventKey="service"
                  onClick={() => setExpanded(false)}
                >
                  Services
                </Nav.Link>
              </Link>
              <Link to="testimonial" smooth={true} duration={1000}>
                <Nav.Link
                  className={`mt-2 ${navFont}  ${current}`}
                  eventKey="testimonial"
                  onClick={() => setExpanded(false)}
                >
                  Testimonials
                </Nav.Link>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <Nav.Link
                  className={`mt-2 ${navFont}  ${current}`}
                  eventKey="contact"
                  onClick={() => setExpanded(false)}
                >
                  Contact
                </Nav.Link>
              </Link>
              <Nav.Link>
                {" "}
                <Routerlink to="/login"><a className="nav-link  btn-primary btn btn-navbar" >
                  Login/Register
                </a></Routerlink>
              </Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
}

export default Navbar;