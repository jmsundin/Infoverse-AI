import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

import "../assets/NavMenu.css";

const NavMenu = () => {
  const headerLogo = (
    <div className="main-header__logo">
      <a href="/" alt="Infoverse AI">
        Infoverse AI
      </a>
    </div>
  );

  const menuItems = (
    <ul className="main-nav__items">
      <li className="main-nav__item">
        <a href="/" alt="Home">
          Home
        </a>
      </li>
      <li className="main-nav__item">
        <a href="/about" alt="About">
          About
        </a>
      </li>
      <li className="main-nav__item">
        <a href="/contact" alt="Contact">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <header className="main-header">
      {headerLogo}
      <nav className="main-nav-container">
        {HamburgerMenu}
        {menuItems}
      </nav>
    </header>
  );
};

export default NavMenu;
