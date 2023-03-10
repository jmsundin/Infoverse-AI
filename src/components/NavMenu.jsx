import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../assets/NavMenu.css";

const NavMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  const routes = [
    {
      path: "/",
      page: "home",
    },
    {
      path: "/about",
      page: "about",
    },
    {
      path: "/contact",
      page: "contact",
    },
  ];

  const headerLogo = (
    <div className="main-header__logo">
      <a href="/" alt="Infoverse AI">
        Infoverse AI
      </a>
    </div>
  );

  const menuItems = routes.map((route) => {
    return (
      <li key={route.page} className="main-nav__item">
        <a href={route.path} alt={route.page}>
          {route.page.charAt(0).toUpperCase() + route.page.slice(1)}
        </a>
      </li>
    );
  });

  const menu =
    windowWidth < 500 ? (
      <HamburgerMenu routes={routes} />
    ) : (
      <ul className="main-nav__items">{menuItems}</ul>
    );

  return (
    <header className="main-header">
      <nav className="main-nav-container">
        {headerLogo}
        {menu}
      </nav>
    </header>
  );
};

export default NavMenu;
