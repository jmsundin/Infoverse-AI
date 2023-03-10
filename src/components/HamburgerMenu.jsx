import React, { useState } from "react";
import "../assets/HamburgerMenu.css";

const HamburgerMenu = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const routes = props.routes;

  const menuClickHandler = () => {
    setMenuIsOpen((prevState) => {
      return !prevState;
    });
  };

  const menuStyles = menuIsOpen ? "hamburger-menu open" : "hamburger-menu";
  const menuItems = routes.map((route) => {
    return (
      <li key={route.page}>
        <a href={route.path} alt={route.page}>
          {route.page.charAt(0).toUpperCase() + route.page.slice(1)}
        </a>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className={menuStyles} onClick={menuClickHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {menuIsOpen && <ul className="menu-list-items">{menuItems}</ul>}
    </React.Fragment>
  );
};

export default HamburgerMenu;
