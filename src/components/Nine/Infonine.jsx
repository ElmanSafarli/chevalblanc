import React from "react";
import "./nine.css";

const Infonine = (props) => {
  return (
    <div className="infonine-container">
      <img className="nine-img" src={props.img}></img>
      <div className="date-nine">{props.date}</div>
      <div className="at-nine">{props.cr}</div>
      <div className="name-nine">{props.name}</div>
    </div>
  );
};

export default Infonine;
