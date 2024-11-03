import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import arrow from '../Assets/icons/arrow-down.svg';
import menu from '../Assets/icons/menu-icon.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="nav-bar">
      {!isMobile || isMenuOpen ? (
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <p>Home<img src={arrow} alt="arrow"/></p>
          <p>About-us<img src={arrow} alt="arrow"/></p>
          <p>Surgeries<img src={arrow} alt="arrow"/></p>
          <p>Testimonials<img src={arrow} alt="arrow"/></p>
          <p>Gallery<img src={arrow} alt="arrow"/></p>
        </div>
      ) : null}
      
      {isMobile && (
        <div className="menu" onClick={toggleMenu}>
          <img src={menu} alt="menu icon" />
        </div>
      )}
      <div className="bmi-button">BMI Calculator</div> 
    </div>
  );
}

export default Navbar;
