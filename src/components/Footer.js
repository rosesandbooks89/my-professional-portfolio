import React from "react";

function Footer() {
  return <footer id="contact-me"></footer>;
}

// footer html with github and linkedin links
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <a href="https://github.com/rosesandbooks89">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <div className="col-md-4">
        <a href="https://www.linkedin.com/in/emilyarizcorreta/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <div className="col-md-4">
        <a href="">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
</footer>;

export default Footer;
