import React, { useRef, useEffect } from "react";
import "./fifth.css";
import Rellax from "rellax";

import imgLeft from "../../assets/fifth-left.jpg";
import imgRight from "../../assets/fifth-right.jpg";

const Fifth = () => {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".rellax", {
      // <---- Via class name
      speed: 30,
      vertical: true,
    });

    new Rellax(rellaxRef.current, {
      // <---- Via useRef element
      speed: -10,
      vertical: true,
    });
  }, []);

  return (
    <div className="fifth">
      <div className="fifth-content">
        <div className="left-side-fifth">
          <img
            className="left-side-fifth-img rellax"
            data-rellax-speed="1"
            src={imgLeft}
          ></img>
        </div>
        <div className="midlle-side-fifth">
          <div className="midlle-fifth-title">
            Alpine awakenings, a taste of the Savoie. Courchevel’s only
            three-MICHELIN starred restaurant Le 1947 at Cheval Blanc is a jewel
            amongst the peaks.
          </div>
          <div className="midlle-fifth-hyperlink">
            <a>LE 1947 À CHEVAL BLANC</a>
          </div>
        </div>
        <div className="right-side-fifth">
          <img
            className="right-side-fifth-img rellax"
            data-rellax-speed="0.5"
            src={imgRight}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
