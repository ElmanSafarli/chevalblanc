import React, { useRef, useEffect } from "react";
import "./third.css";
import Rellax from "rellax";

import imgLeft from "../../assets/third1.jpg";
import imgRight from "../../assets/third2.jpg";

const Third = () => {
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
    <div className="third">
      <div className="third-content">
        <img
          className="imgLeft rellax"
          data-rellax-speed="2"
          src={imgLeft}
        ></img>
        <div className="third-content-text">
          Ski-in, ski-out – sleep-in, sneak-out. Bold design, modern art,
          exquisite, exclusive. Discover the Maison with Palace distinction in
          the Trois Vallées.
        </div>
        <div className="imgRight-blok">
          <img
            className="imgRight rellax"
            data-rellax-speed="0.5"
            src={imgRight}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Third;
