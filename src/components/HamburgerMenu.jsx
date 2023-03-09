import React, { useState } from "react";
import "../assets/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [bars, setBars] = useState([
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ]);

  const handleMenuClick = (id) => {
    setBars((prevState) => {
      prevState.map((bar) => {
        bar.id === id ? { ...bar, isActive: !bar.isActive } : bar;
      });
    });
  };

  const menu = (
    <div className="hamburger-menu">
      {bars.map((bar) => (
        <div
          key={bar.id}
          className={bar.isActive ? "bar active" : "bar"}
          onClick={() => handleMenuClick(bar.id)}
        ></div>
      ))}
    </div>
  );

  return menu;
};

export default HamburgerMenu;