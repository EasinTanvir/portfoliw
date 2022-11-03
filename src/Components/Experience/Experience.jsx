import React from "react";
import { ModeContext } from "../../Store/ContextApi";
import "./experience.css";

const Experience = () => {
  const { state } = ModeContext();
  const { darkMode } = state;
  return (
    <div id="Experience" className="experience">
      <div className="achievement">
        <div
          style={darkMode ? { color: "black" } : { color: "" }}
          className="circle"
        >
          2+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          style={darkMode ? { color: "black" } : { color: "" }}
          className="circle"
        >
          25+
        </div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          style={darkMode ? { color: "black" } : { color: "" }}
          className="circle"
        >
          10+
        </div>
        <span>Happy</span>
        <span>Clients</span>
      </div>
    </div>
  );
};

export default Experience;
