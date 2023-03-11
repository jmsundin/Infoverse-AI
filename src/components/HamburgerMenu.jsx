import React, { useState } from "react";
import "../assets/NavMenu.css";
import "../assets/HamburgerMenu.css";

const HamburgerMenu = (props) => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  // const menuClickHandler = () => {
  //   setMenuIsOpen((prevState) => {
  //     return !prevState;
  //   });
  // };

  // const menuStyles = menuIsOpen ? "hamburger-menu open" : "hamburger-menu";

  return (
    <React.Fragment>
      <div className={props.className}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </React.Fragment>
  );
};

export default HamburgerMenu;
