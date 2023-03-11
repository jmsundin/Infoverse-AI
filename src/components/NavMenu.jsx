import React, { useState, useEffect } from "react";
// https://www.npmjs.com/package/react-burger-menu
import { slide as Menu } from "react-burger-menu";
import MenuItems from "./MenuItems";
import routes from "../data/routes";
import { useMediaQuery } from "react-responsive";

import "../assets/NavMenu.css";
import "../assets/MenuModal.css";
import "../assets/MenuItems.css";

const NavMenu = () => {
  const sideMenuStyles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
    },
    bmItem: {
      "align-items": "center",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  };
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

  // fill="#3b4047"

  const hamburgerMenu = (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <line
        x1="0"
        y1="1"
        x2="28"
        y2="1"
        style={{ stroke: "#fff", strokeWidth: "2.5" }}
      />
      <line
        x1="0"
        y1="8"
        x2="28"
        y2="8"
        style={{ stroke: "#fff", strokeWidth: "2.5" }}
      />
      <line
        x1="0"
        y1="15"
        x2="28"
        y2="15"
        style={{ stroke: "#fff", strokeWidth: "2.5" }}
      />
    </svg>
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
        y2="0"
        style={{ stroke: "#fff", strokeWidth: "2.5" }}
      />
    </svg>
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
          styles={sideMenuStyles}
          right
        >
          <MenuItems routes={routes} />
        </Menu>
      </nav>
    </header>
  );
};

export default NavMenu;
