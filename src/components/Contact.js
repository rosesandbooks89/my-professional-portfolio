import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNameBlur = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError(true);
    } else if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleMessageBlur = () => {
    if (!message) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  return (
    <section id="contact-me" className="text-center bg-dark text-white py-5">
      <h3>Contact Me</h3>
      <form className="mx-auto">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleNameBlur}
            required
          />
          <br />
          {nameError && <p className="text-danger">Hey, I need your name!</p>}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            required
          />
          <br />
          {emailError && <p className="text-danger">Invalid email address</p>}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={handleMessageBlur}
            required
          ></textarea>
          <br />
          {messageError && <p className="text-danger">Message is required</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (!name || !email || !message) {
              alert("Please fill out all fields!");
            } else if (!validateEmail(email)) {
              alert("Please enter a valid email address!");
            } else {
              alert("Thanks for reaching out!");
              setEmail("");
              setName("");
              setMessage("");
            }
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
