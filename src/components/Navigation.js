import React from "react";

function Navigation({setCurrentPage, currentPage}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${currentPage === "AboutMe" && "active"}`} aria-current="page" href="#about-me" onClick={() => setCurrentPage("AboutMe")}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentPage === "Portfolio" && "active"}`} href="#portfolio" onClick={() => setCurrentPage("Portfolio")}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentPage === "Contact" && "active"}`} href="#contact-me" onClick={() => setCurrentPage("Contact")}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentPage === "Resume" && "active"}`} href="#resume" onClick={() => setCurrentPage("Resume")}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;