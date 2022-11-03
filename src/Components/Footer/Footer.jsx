import React from "react";
import "./footer.css";
import Wave from "../../assests/img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>easintanvir102@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/md-easin-67633a241">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/MD.EasinTanvir">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/EasinTanvir">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
