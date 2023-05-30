import "../assets/NavMenu.css";
import "../assets/HamburgerMenu.css";

const HamburgerMenu = () => {
  const spanHamburgerMenu = (
    <div className="hamburger-menu">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );

  const svgHamburgerMenu = (
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
    {svg: svgHamburgerMenu, span: spanHamburgerMenu, cross: crossIcon}
  );
};

export default HamburgerMenu;
