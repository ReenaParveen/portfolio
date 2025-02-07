import React, { useState, useRef } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <a 
            href="#home" 
            className="anchor-link" 
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </a>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <a 
            href="#about" 
            className="anchor-link" 
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
          </a>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <a 
            href="#work" 
            className="anchor-link" 
            onClick={() => setMenu("work")}
          >
            <p>Portfolio</p>
          </a>
          {menu === "work" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <a 
            href="#contact" 
            className="anchor-link" 
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </a>
          {menu === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <a 
          href="#contact" 
          className="anchor-link" 
          onClick={() => setMenu("contact")}
        >
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
