import React, { useRef, useEffect } from "react";
import "./nine.css";
import Infonine from "./Infonine";
import state from "../../data";

var offset = 0;
// const sliderLine = document.querySelectorAll(".infonine-container");

// const createInfo = () => {
//   return (
//     <Infonine
//       img={state.img}
//       date={state.date}
//       cr={state.cr}
//       name={state.name}
//     />
//   );
// };

const Nine = () => {
  React.useEffect(() => {
    document
      .querySelector(".nine-slider-next")
      .addEventListener("click", () => {
        offset = offset + 500;
        if (document.querySelectorAll(".slider-nine-line")[0]) {
          document.querySelectorAll(".slider-nine-line")[0].style.left =
            -offset + "px";
        }

        let nextBtn = offset > 2000 ? (offset = 0) : null;
      });
  });

  React.useEffect(() => {
    document
      .querySelector(".nine-slider-prev")
      .addEventListener("click", () => {
        offset = offset - 350;
        if (document.querySelectorAll(".slider-nine-line")[0]) {
          document.querySelectorAll(".slider-nine-line")[0].style.left =
            -offset + "px";
        }
        // if (offset < 0) {
        //   offset = 2000;
        // }
        let prevBtn = offset < 0 ? (offset = 2000) : null;
      });
  });

  return (
    <div className="nine">
      <div className="nine-content">
        <div className="nine-content-title">News from Courchevel</div>
        <div className="nine-info">
          <div className="slider-nine-line">{state.map(Infonine)}</div>

          <button className="nine-slider-next">
            <div className="next-icon"></div>
          </button>
          <button className="nine-slider-prev">
            <div className="prev-icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nine;
