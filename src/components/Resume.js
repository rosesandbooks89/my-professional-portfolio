import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Resume() {
  const skills = [
    { skill: "HTML", icon: "fa-html5" },
    { skill: "CSS", icon: "fa-css3" },
    { skill: "JavaScript", icon: "fa-brands fa-square-js" },
    { skill: "Node.js", icon: "fa-brands fa-node" },
    { skill: "Express.js", icon: "fa-server" },
    { skill: "React", icon: "fa-brands fa-react" },
    { skill: "MySQL", icon: "fa-database" },
    { skill: "MongoDB", icon: "fa-database" },
  ];

  return (
    <section id="resume" className="container my-5">
      <h3 className="text-center mb-4">Resume</h3>
      <div className="d-flex justify-content-center mb-4">
        {/* open a href link in a new page when download button is clicked */}
        <a href="https://drive.google.com/file/d/1toyvvTaNCDQ7gchs5Oq_aUOG4ToTbNSV/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary">
            Download My Resume
        </a>
      </div>
      <h4 className="mb-3 text-center">Full Stack Skills:</h4>
      <ul className="list-group list-group-horizontal-md d-flex justify-content-center flex-wrap">
        {skills.map((item) => (
          <li key={item.skill} className="list-group-item text-center m-2 p-3">
            <i className={`fa ${item.icon} fa-3x mb-2`}></i>
            <div>{item.skill}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
