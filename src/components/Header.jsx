import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../assets/shared/logo.svg"
import close from "../assets/shared/icon-close.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
function Header({ actualPage }) {
  const [isActive, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <Link to="/" className="homeLogo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="line"></div>
      <div className="hamburguerMenu">
        <a
          onClick={handleMenu}
          className={`icon ${isActive ? "inactive" : ""}`}
        >
          <img src={hamburger} alt="Hamburger Icon" />
        </a>
        <nav className={`links ${isActive ? "active" : ""}`}>
          <a className="icon close">
            <img
              onClick={handleMenu}
              src={close}
              alt="Close Hamburger Menu"
            />
          </a>
          <ul>
            <li className={actualPage === "home" ? "active" : ""}>
              <Link to="/">
                <span>00 </span>Home
              </Link>
              {/* <Link to="/">00 Home</Link> */}
            </li>
            <li className={actualPage === "destination" ? "active" : ""}>
              <Link to="/destination">
                <span>01 </span>Destination
              </Link>
              {/* <Link to="/destination">01 Destination</Link> */}
            </li>
            <li className={actualPage === "crew" ? "active" : ""}>
              <Link to="/crew">
                <span>02 </span>Crew
              </Link>
              {/* <Link to="/crew">02 Crew</Link> */}
            </li>
            <li className={actualPage === "technology" ? "active" : ""}>
              <Link to="/technology">
                <span>03 </span>Technology
              </Link>
              {/* <Link to="/technology">03 Technology</Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;