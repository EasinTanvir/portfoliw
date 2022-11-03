/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./about.css";
import { ModeContext } from "../../Store/ContextApi";

const About = () => {
  const { state } = ModeContext();
  const { darkMode } = state;

  return (
    <div id="About" className="abouts">
      <div className="titles">
        <h2>About</h2>
        <p style={darkMode ? { color: "white" } : { color: "#788097" }}>
          I've interested in programming since my childhood. Since I was in
          college I never stopped learning new programming skills and languages.
          This eagerness to learn new things is what helped me become a web
          developer. I have developed many website and application for my
          friends and for fun as well. This passion has since lasted and lead to
          my decision of working as a web developer and consultant.
        </p>
      </div>
      <div className="a-bodys">
        <div className="a-lefts">
          <img src="/main.JPG" alt="" />
        </div>
        <div className="a-rights">
          <p style={darkMode ? { color: "white" } : { color: "#788097" }}>
            I've building website for more than two years. As a developer I grow
            up with some backend technologies but after that I became more and
            more frontend developer using modern frameworks like React. I am
            experienced in so many fron-end languages like React, Javascript,
            TypeScript, NextJs, Html, Css, Sass, Bootstrap, MaterialUi and also
            familiar with backend technologies like nodeJs and expressJs as
            well. I am highly experienced at building RestfulApi, and advance
            React features like Virtual DOM, Performance, Extensions, Creating
            Refs Code-Splitting, and for global state management I am adept with
            Redux as well as contextApi. As all we know A server-side rendered
            application speeds up page loading and improves user experience and
            The web apps built using ReactJS are slow as compared to NextJS. So
            I am here to give you the best user experience using all the core
            features of NextJs like Image Optimization, Hybrid: SSG and SSR,
            Incremental Static Regeneration,Fast Refresh and others.
          </p>
        </div>
      </div>
      <div className="extras">
        <p style={darkMode ? { color: "white" } : { color: "#788097" }}>
          Working as a web developer, I have collaborated with several web
          developers and designers. Check my recent portfoliw section to see all
          the latest projects I have completed. I've gained experience by
          completing different types of project and interacting with different
          clients. As a developer I never stop learning new technologies and
          always try to learn new things from others and thech others to new
          things. I am continuesly hard to make my dreams come true
        </p>
      </div>
    </div>
  );
};

export default About;
