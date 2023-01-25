import React from "react";
import "./last.css";

import img1 from "../../assets/last/1.jpg";
import img2 from "../../assets/last/2.jpg";
import img3 from "../../assets/last/3.jpg";
import img4 from "../../assets/last/4.jpg";

const Last = () => {
  return (
    <div className="last">
      <div className="last-content">
        <hr />
        <div className="last-content-title">Glimpses of Courchevel</div>
        <div className="last-content-text">@ChevalBlancCourchevel</div>
        <div className="last-content-photo">
          <a href="https://www.instagram.com/p/Cj3NdjGtcM0/?hl=en">
            <img src={img1}></img>
          </a>
          <a href="https://www.instagram.com/p/Cg2PyikPbkG/?hl=en">
            <img src={img2}></img>
          </a>
          <a href="https://www.instagram.com/p/CWGlrVvLd09/">
            <img src={img3}></img>
          </a>
          <a href="https://www.instagram.com/p/Cab0hGmtoFk/">
            <img src={img4}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Last;
