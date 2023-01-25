import React from "react";
import "./first.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import imgUrl from "../../assets/photo1.jpg";

const First = () => {
  return (
    <div className="first">
      <div className="first-content">
        <div className="left-first">
          <div className="left-up-content">
            <a>Home</a>
            <FontAwesomeIcon className="first-icon" icon={faAngleRight} />
            <p>COURCHEVEL</p>
          </div>
          <img className="first-img" src={imgUrl}></img>
        </div>
        <div className="right-first">
          <div className="right-first-title">Cuckoo sound the clocks</div>
          <div className="right-first-text">
            Cosy up, winter down in a snow-pile of feathered pillows, cashmere
            blankets and duvets like clouds. Late-night snowball fights become
            early morning pillow fights. Rise gently in the glow of the Alps.
          </div>
          <div className="hyperlink-first">
            <a>ROOMS & SUITES</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
