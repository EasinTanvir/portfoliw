import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import ProfileIntro from "./Components/ProfileIntro/ProfileIntro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfoliw from "./Components/Portfoliw/Portfoliw";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { ModeContext } from "./Store/ContextApi";
import About from "./Components/About/About";

const App = () => {
  const { state } = ModeContext();
  const { darkMode } = state;

  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
      className="App"
    >
      <Navbar />
      <ProfileIntro />
      <About />
      <Services />
      <Experience />
      <Works />
      <Portfoliw />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
