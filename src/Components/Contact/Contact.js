import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ModeContext } from "../../Store/ContextApi";

const Contact = () => {
  const { state } = ModeContext();
  const { darkMode } = state;
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7yw1hl",
        "template_ixpr45j",
        form.current,
        "6CVP6qAGTRzIRL-JU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={darkMode ? { color: "white" } : { color: "black" }}>
            Get in touch
          </span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            required
            name="message"
            className="user"
            placeholder="Message"
          />
          <button type="submit" value="Send" className="button">
            Submit
          </button>
          {done && <span>Thanks for your message catch you soon!</span>}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
