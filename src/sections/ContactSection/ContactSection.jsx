import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactSection.css";

function ContactSection({ state }) {

  const [inputState, setInputState] = useState({
    user_name: "", 
    user_email: "", 
    message: ""
  })

  function isEmpty(input) {
    return input.trim() !== "";
  }

  function minLength(word, char) {
    return word.length > char;
  }

  function validateEmail(input) {
    return /\S+@\S+\.\S+/.test(input);
  }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (error) => {
            console.log(error.text);
          }
        );

        setInputState({
          user_name: "",
          user_email: "",
          message: "",
        });
    };

     const handleChange = (e) => {
       setInputState((oldState) => ({
         ...oldState,
         [e.target.name]: e.target.value,
       }));
     };

     let formIsInvalid = !(isEmpty(inputState.user_name) && validateEmail(inputState.user_email) && minLength(inputState.message, 15)
)
  return (
    <section
      id="contact-section"
      className={!state.contact ? "hide" : undefined}
    >
      <h2>Contact Me</h2>
      <div id="contacts-container">
        <div id="contact-form-container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" value={inputState.user_name || ""} onChange={handleChange} />
            <input type="email" name="user_email" placeholder="Email" value={inputState.user_email || ""} onChange={handleChange} />
            <textarea name="message" placeholder="Message" value={inputState.message || ""} onChange={handleChange}/>
            <input type="submit" value="Send" disabled={formIsInvalid}/>
          </form>
        </div>
        <div id="contact-container">
          <h3>Contact Info</h3>
          <a href="mailto:manohisoarajaonarivony@gmail.com">
            manohisoarajaonarivony@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/manohisoa-rajaonarivony/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/manohisoa-rajaonarivony
          </a>
          <a
            href="https://github.com/ManohisoaVicky"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ManohisoaVicky
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
