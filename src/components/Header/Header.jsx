import React from "react";
import "./header.css";
import videoUrl from "../../assets/header-bg.mp4";

const Header = () => {
  return (
    <div className="header">
      <video autoPlay loop muted id="header-bg">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="logo"></div>
      <div className="header-content">
        <div className="text-content-header">
          <div className="header-title">The bold spirit of the French Alps</div>
          <div className="header-text">
            From December 9th, 2022 to April 10th, 2023
          </div>
        </div>
        <div className="header-check">
          <div className="header-check-info">
            <div className="header-check-title">Check Availabilities</div>
            <div className="header-check-title-content">
              <p>Book</p>
              <div className="dropdown">
                <button
                  onClick={(dropdownList) => {
                    document
                      .getElementById("myDropdown")
                      .classList.toggle("show");
                    document
                      .getElementById("caret")
                      .classList.toggle("caret-rotate");
                  }}
                  className="dropbtn"
                >
                  <p className="btn-text-dropdown">A ROOM, A...</p>
                  <div id="caret" className="caret"></div>
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <ul className="menu">
                    <li>A room, a suite, a chalet</li>
                    <li>A dinner at Le 1947 à Cheval Blanc</li>
                    <li>A lunch at La Terrasse de Cheval Blanc</li>
                    <li>
                      A lunch or dinner at Le Restaurant de Cheval Blanc
                      Courchevel
                    </li>
                    <li>A haircut at the Hair Room Service by John Nollet</li>
                    <li>A treatment at the Cheval Blanc Spa</li>
                  </ul>
                </div>
              </div>
              <button className="ok-btn">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
