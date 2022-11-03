import React, { useEffect, useState } from "react";
import Toggle from "../../SubComponents/Toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assests/img/tt.png";

const Navbar = () => {
  const [small, setSmaill] = useState(false);

  const checkScreenSize = () => {
    setSmaill(window.innerWidth < 992);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <img src={logo} alt="" />
          <span>Easin</span> <span>Tanvir</span>
        </div>
        <div className="sun">
          <Toggle />
        </div>
      </div>
      <div className="n-right">
        {small ? (
          <nav className="my-navs">
            <ul>
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i
                    style={{ color: "blue", width: "10px" }}
                    className="fa-solid fa-bars"
                  ></i>
                  <i
                    className="dropdown icon"
                    style={{ color: "blue", paddingLeft: "10px" }}
                  ></i>
                  <div className="menu">
                    <div className="item">
                      <Link
                        spy={true}
                        to="Navbar"
                        smooth={true}
                        activeClass="activeClass"
                      >
                        <li>Home</li>
                      </Link>
                    </div>
                    <div className="item">
                      <Link spy={true} to="About" smooth={true}>
                        <li>About</li>
                      </Link>
                    </div>
                    <div className="item">
                      <Link spy={true} to="Services" smooth={true}>
                        <li>Services</li>
                      </Link>
                    </div>
                    <div className="item">
                      <Link spy={true} to="Experience" smooth={true}>
                        <li>Experience</li>
                      </Link>
                    </div>

                    <div className="item">
                      <Link spy={true} to="Portfoliw" smooth={true}>
                        <li>Portfoliw</li>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        ) : (
          <>
            {" "}
            <div className="n-list">
              <ul>
                <Link
                  spy={true}
                  to="Navbar"
                  smooth={true}
                  activeClass="activeClass"
                >
                  <li>Home</li>
                </Link>
                <Link spy={true} to="About" smooth={true}>
                  <li>About</li>
                </Link>
                <Link spy={true} to="Services" smooth={true}>
                  <li>Services</li>
                </Link>
                <Link spy={true} to="Experience" smooth={true}>
                  <li>Experience</li>
                </Link>

                <Link spy={true} to="Portfoliw" smooth={true}>
                  <li>Portfoliw</li>
                </Link>
              </ul>
            </div>
          </>
        )}

        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
