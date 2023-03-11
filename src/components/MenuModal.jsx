import React, { useState, useEffect, useRef } from "react";

import "../assets/MenuModal.css";

import MediaQuery from "react-responsive";

function MenuModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOnBackground = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  }, [modalRef]);

  return (
    <div className="menu-modal" ref={modalRef}>
      <div className="menu-modal__container">{props.children}</div>
    </div>
  );
}

export default MenuModal;
