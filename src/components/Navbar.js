import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false);
      } else{
          setButton(true);
      }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            {/* A icon  */}
            My Portfolio <i class="fab fa-adn"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-links" onClick={closeMenu}>
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links-mobile" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"> Contact </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
