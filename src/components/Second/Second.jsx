import React, { useRef, useEffect } from "react";
import Rellax from "rellax";
import "./second.css";

import imgUrlSecond from "../../assets/second.jpg";

const Second = () => {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".rellax", {
      // <---- Via class name
      speed: 20,
      vertical: true,
    });

    new Rellax(rellaxRef.current, {
      // <---- Via useRef element
      speed: -10,
      vertical: true,
    });
  }, []);

  return (
    <div className="second">
      <div className="second-content">
        <div className="second-left rellax" data-rellax-speed="1">
          <div className="second-left-tite">Let it snow</div>
          <div className="second-left-text">
            Winter magicians, the Maison’s Alchemists have a few tricks up their
            sleeves.
            <br /> Inviting igloos in the middle of the slopes, snowmobile races
            around the peaks,
            <br /> sledge-dog kisses as the sun sleeps. Winter better like we
            do.
          </div>
          <div className="hyperlink-second">
            <a>EMOTIONS</a>
          </div>
        </div>

        <div className="second-right">
          <img
            id="second-right-img"
            className="rellax"
            data-rellax-speed="3"
            src={imgUrlSecond}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Second;
