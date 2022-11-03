import React from "react";
import "./work.css";
import node from "../../assests/img/node.png";
import react from "../../assests/img/react2.jpg";
import js from "../../assests/img/javascript.png";
import mongo from "../../assests/img/mon.png";
import next from "../../assests/img/next.png";
import { ModeContext } from "../../Store/ContextApi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  const { state } = ModeContext();
  const { darkMode } = state;
  return (
    <div className="works">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          Works with{" "}
        </span>
        <span>Modern Technology</span>
        <span
          style={
            (darkMode ? { color: "white" } : { color: "" },
            { marginRight: "4rem" })
          }
        >
          I am well versed in some modern framworks for front end developer.
          <br /> and provide solution for you to all types of website related
          issue.
          <br />
          My goal is to help you to make your business success with my <br />{" "}
          expertise & knowledge.
          <br />
          <h2
            style={{
              marginTop: "1rem",
              marginBottom: "-1rem",
              fontWeight: "bold",
            }}
          >
            My Skills,
          </h2>
          <br />
          <ul className="w-lists">
            <div>
              <li style={{ fontSize: "15px" }}>Javascript</li>
              <li style={{ fontSize: "15px" }}>TypeScript</li>
              <li style={{ fontSize: "15px" }}>ReactJs</li>
              <li style={{ fontSize: "15px" }}>NodeJs</li>
              <li style={{ fontSize: "15px" }}>ExpressJs</li>
            </div>
            <div>
              {" "}
              <li style={{ fontSize: "15px" }}>NextJs</li>
              <li style={{ fontSize: "15px" }}>Bootstrap5</li>
              <li style={{ fontSize: "15px" }}>Css3</li>
              <li style={{ fontSize: "15px" }}>Html5</li>
              <li style={{ fontSize: "15px" }}>MetarialUi</li>
            </div>
          </ul>
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button style={{ marginTop: "1.4rem" }} className="button i-button">
            Get in Touch
          </button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={next} alt="" />
          </div>
        </motion.div>

        <div className="w-backcirle blueCircle"></div>
        <div className="w-backcirle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
