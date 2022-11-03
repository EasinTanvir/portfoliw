import React from "react";
import { ModeContext } from "../../Store/ContextApi";
import "./card.css";

const Card = ({ emoji, heading, detail1, detail2, detail3 }) => {
  const { state } = ModeContext();
  const { darkMode } = state;
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span style={darkMode ? { color: "white" } : { color: "" }}>
        {heading}
      </span>
      <div className="s-text">
        <span>{detail1}</span>
        <span>{detail2}</span>
        <span>{detail3}</span>
      </div>

      {/* <button className="button c-button">Learn More</button> */}
    </div>
  );
};

export default Card;
