import React, { useState } from "react";

function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <section id="contact-me" className="text-center bg-dark text-white py-5">
        <h3>Contact Me</h3>
        <form className="mx-auto">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {email && !validateEmail(email) && <p className="text-danger">Invalid email address</p>}
            <div className="mb-3">
                <textarea className="form-control" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </section>
);
}

export default Contact;