import React from "react";
import "./service.css";
import heartEmoji from "../../assests/img/heartemoji.png";
import glassEmoji from "../../assests/img/glasses.png";
import humbleEmoji from "../../assests/img/humble.png";
import Card from "../../SubComponents/Card/Card";
import resume from "./jobs.pdf";
import { ModeContext } from "../../Store/ContextApi";
import { motion } from "framer-motion";

const Services = () => {
  const { state } = ModeContext();
  const { darkMode } = state;
  const transition = { duration: 1, type: "spring" };

  return (
    <div id="Services" className="services">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          My Awesome
        </span>
        <span>Services</span>
        <span
          style={
            (darkMode ? { color: "white" } : { color: "#788097" },
            { textAlign: "justify" },
            { marginRight: "3rem" })
          }
        >
          A passionate and Experienced combination of Web developers and <br />
          a designer who can solve your problem in the easiest and most <br />
          promotional ways. I always believe in 100% quality and unique <br />
          sesrvice So don’t hesitate to contact me.
          <br />
          <ul>
            <li style={{ fontSize: "14px" }}>Responsive design</li>
            <li style={{ fontSize: "14px" }}>
              Building Single Page Application
            </li>
            <li style={{ fontSize: "14px" }}>
              Dynamic, reusable and flexible code{" "}
            </li>
            <li style={{ fontSize: "14px" }}>
              User friendly & Easy navigation{" "}
            </li>
            <li style={{ fontSize: "14px" }}>
              Reliable and secure & High-performing{" "}
            </li>
            <li style={{ fontSize: "14px" }}>API integration </li>
          </ul>
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "26rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
          style={{ left: "17.5rem" }}
        >
          <Card
            emoji={heartEmoji}
            heading="Website Design"
            detail1="Responsive Layouts"
            detail2="Material Design with Bootstrap"
            detail3="HTML5, CSS3, Bootstrap5"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4" }}
        >
          <Card
            emoji={glassEmoji}
            heading="Full Stack WebDevelopment"
            detail1="Javascript/Typescript"
            detail2="ReactJs/NextJs"
            detail3="NodeJs/ExpressJs"
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "20rem", top: "25rem" }}
          transition={transition}
          style={{ top: "19rem", left: "16rem" }}
        >
          <Card
            emoji={humbleEmoji}
            heading="Custom Web Development"
            detail1="One-Way Data Binding"
            detail2="Declarative UI"
            detail3="Component Based Architecture"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}>
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Services;
