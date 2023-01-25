import React from "react";
import "./seven.css";

import videoUrl from "../../assets/seven.mp4";
import imgUrl from "../../assets/seven.jpg";

const Seven = () => {
  return (
    <div className="seven">
      <div className="seven-content">
        <div className="seven-video">
          <video controls autoPlay muted loop width="500">
            <source src={videoUrl} />
          </video>
        </div>
        <div className="seven-blok">
          <div className="seven-lef-side">
            <div className="seven-lef-side-title">A winter's tale…</div>
            <div className="seven-lef-side-text">
              Once upon a time, reimagined, with the help of Cheval Blanc.
              Twirl, whirl, twist and glide - find the snowflake within and let
              the wintery air of the Alps envelop all. Ski safaris, silver
              screen evenings, families at play or relaxation all day…
            </div>
            <div className="hyperlink-seven">
              <a>TRAVEL DIARY</a>
            </div>
          </div>
          <div className="seven-right-side">
            <img src={imgUrl}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seven;
