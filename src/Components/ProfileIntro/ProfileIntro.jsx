import React from "react";
import "./intro.css";
import gitImg from "../../assests/img/github.png";
import linkedImg from "../../assests/img/linkedin.png";
import insImg from "../../assests/img/instagram.png";

//legt img

import img1 from "../../assests/img/Vector1.png";
import img2 from "../../assests/img/Vector2.png";

import thumUp from "../../assests/img/thumbup.png";
import crown from "../../assests/img/crown.png";
import glasses from "../../assests/img/glassesimoji.png";
import FloatingDiv from "../../SubComponents/FloatingDiv/FloatingDiv";
import { ModeContext } from "../../Store/ContextApi";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

const ProfileIntro = () => {
  const { state } = ModeContext();
  const { darkMode } = state;

  const transition = { duration: 2, type: "spring" };

  return (
    <div id="Navbar" className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : { color: "#242d49" }}>
            Hy! I Am
          </span>
          <span> EasinTanvir</span>
          <span style={darkMode ? { color: "white" } : { color: "#788097" }}>
            I'm a fullstack developer with 2+ years of experience developing{" "}
            <br />
            full stack web applications. I’ve worked internationally in-house,{" "}
            <br />
            and remotely on projects for leading brands, agencies and charities.
            <br />
            I care deeply about creating world-class, useful, and beautiful
            <br /> products that help people and make a difference. I can be as
            <br />
            involved in your project as you need me to be.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Get in Touch</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/EasinTanvir">
            <img src={gitImg} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/md-easin-67633a241">
            <img src={linkedImg} alt="" />
          </a>
          <a href="https://www.facebook.com/MD.EasinTanvir">
            <img src={insImg} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img
          style={{
            width: "190px",
            height: "190px",
            objectFit: "fill",
            borderRadius: "50%",
          }}
          src={"/hero-bg.jpg"}
          alt=""
        />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glasses}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "84%" }}
          whileInView={{ left: "55%" }}
          transition={transition}
          className="icon1"
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "10rem", top: "18rem" }}
          whileInView={{ left: "2rem", top: "23rem" }}
          transition={transition}
          className="icon2"
        >
          <FloatingDiv image={thumUp} text1="Craetive" text2="Designer" />
        </motion.div>
        {/* blur divs */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProfileIntro;
