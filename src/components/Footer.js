import React from "react";

function Footer() {
  return (
    <footer id="contact-me" className="footer">
      <div className="container">
        <div className="row justify-content-md-between">
          <div className="col-md-2">
            <a href="https://github.com/rosesandbooks89">
              <i className="fab fa-github fa-4x"></i>
              <p>Github</p>
            </a>
          </div>
          <div className="col-md-2">
            <a href="https://www.linkedin.com/in/emilyarizcorreta/">
              <i className="fab fa-linkedin fa-4x"></i>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
