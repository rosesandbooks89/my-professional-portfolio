import React from "react";
import photo from "../assets/Images/resumePhoto.png";

function Header() {
  return (
    <header className="text-center py-4 bg-dark text-white">
      <h1 className="text-center">Emily Arizcorreta</h1>
      <img src={photo} alt="Emily Arizcorreta" className="picture rounded-circle" />
      <p className="text-center">Full Stack Web Developer</p>
    </header>
  );
}

export default Header;