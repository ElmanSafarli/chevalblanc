import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="toggle"></div>
        <div className="nav-items">
          <ul>
            <li>ACCUEIL</li>
            <li>CARNET DE VOYAGE</li>
            <li>CHAMBRES & SUITES</li>
            <li>ART CULINAIRE</li>
            <li>BIEN-ÊTRE</li>
            <li>ÉMOTIONS</li>
            <li>RENDEZ-VOUS</li>
            <li>CADEAUX</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="nav-language">EN</div>
      </div>
    </div>
  );
};

export default Navbar;
