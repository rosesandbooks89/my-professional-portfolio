import React from "react";

function Footer() {
  return (
    <footer id="contact-me" className="footer">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-1 justify-content-md-center">
            <a href="https://github.com/rosesandbooks89">
              <i className="fab fa-github fa-2x"></i>
              <p>Github</p>
            </a>
          </div>
          <div className="col-1 justify-content-md-center">
            <a href="https://www.linkedin.com/in/emilyarizcorreta/">
              <i className="fab fa-linkedin fa-2x"></i>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
