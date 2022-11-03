import React from "react";
import "./toglle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { ModeContext } from "../../Store/ContextApi";

const Toggle = () => {
  const { state, dispatch } = ModeContext();
  const { darkMode } = state;

  const onClickHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div onClick={onClickHandler} className="toggle">
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
