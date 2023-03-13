import React, { useState, useEffect } from "react";
// https://www.npmjs.com/package/react-burger-menu
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

import "../assets/NavMenu.css";
import "../assets/HamburgerMenu.css";

const NavMenu = () => {
  const isDesktopLaptopOrTablet = useMediaQuery({
    query: "(min-width: 501px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const [isOpen, setIsOpen] = useState(false);

  const onOpenMenuHandler = () => {
    setIsOpen(true);
  };

  const onCloseMenuHandler = () => {
    setIsOpen(false);
  };

  const headerLogo = (
    <div className="main-header__logo">
      <a href="/" alt="Infoverse AI">
        Infoverse AI
      </a>
    </div>
  );

  const hamburgerMenu = (
    <div className="hamburger-menu">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );

  const crossIcon = (
    <svg viewBox="0 0 21 21" width="24" height="24">
      <line
        x1="1"
        y1="1"
        x2="20"
        y2="20"
        style={{ stroke: "#fff", strokeWidth: "2.5" }}
      />
      <line
        x1="1"
        y1="20"
        x2="20"
        y2="1"
        style={{ stroke: "#fff", strokeWidth: "2.5" }}
      />
    </svg>
  );

  const menuItems = (
    <ul>
      <li key="Home">
        <a href="/home" alt="Home">
          Home
        </a>
      </li>
      <li key="About">
        <a href="/about" alt="About">
          About
        </a>
      </li>
      <li key="Contact">
        <a href="/contact" alt="Contact">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <header className="main-header">
      <nav className="main-nav-container">
        {headerLogo}
        <Menu
          customBurgerIcon={hamburgerMenu}
          customCrossIcon={crossIcon}
          isOpen={isOpen}
          onOpen={onOpenMenuHandler}
          onClose={onCloseMenuHandler}
          right
        >
          {menuItems}
        </Menu>
      </nav>
    </header>
  );
};

export default NavMenu;
