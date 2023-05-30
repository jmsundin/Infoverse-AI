import { useState, useRef, useEffect, Fragment } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import QueryForm from "./QueryForm";

import "./NavBar.css";

const NavBar = (props) => {
  const pageFromProps = props.page;
  const [page, setPage] = useState(pageFromProps);
  const [toggleMenu, setToggleMenu] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        toggleMenu &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleMenu]);

  const headerLogo = (
    <div className="navbar__logo">
      <a href="/" alt="Infoverse AI">
        Infoverse AI
      </a>
    </div>
  );

  const menuLinks = (
    <Fragment>
      <li key="Home">
        <a href="/Home" alt="Home">
          Home
        </a>
      </li>
      <li key="About">
        <a href="/About" alt="About">
          About
        </a>
      </li>
      <li key="Contact">
        <a href="/Contact" alt="Contact">
          Contact
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav className="gradient__bg navbar">
      {headerLogo}
      {page === "Home" ? (
        <QueryForm onQuerySubmit={props.onQuerySubmit} />
      ) : null}
      <ul className="navbar__links">{menuLinks}</ul>
      <div className="navbar__hamburger-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            ref={modalRef}
            className="navbar__hamburger-menu__links scale-up-center gradient__bg"
          >
            {menuLinks}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
