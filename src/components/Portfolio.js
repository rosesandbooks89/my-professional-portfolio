import React from "react";

import textEditor from "../assets/Images/textEditor.png";
import weatherDashboard from "../assets/Images/weatherApp.png";
import myDailyPlanner from "../assets/Images/planner.png";
import noteTaker from "../assets/Images/note-taker.png";
import gsd from "../assets/Images/gsd.png";
import yassFlix from "../assets/Images/yassFlix.png";
import reMemories from "../assets/Images/re-Memories.png";

// add 6 projects to the portfolio
function Portfolio() {
  const projects = [
    {
      name: "My Daily Planner",
      description:
        "An application that allows the user to save events for each hour of the working day.",
      image: myDailyPlanner,
      github: "https://github.com/rosesandbooks89/my-daily-planner",
      deployedUrl: "https://rosesandbooks89.github.io/my-daily-planner/",
    },
    {
      name: "My Weather App",
      description:
        "An application that allows the user to search for a city and get the current weather and 5 day forecast.",
      image: weatherDashboard,
      github: "https://github.com/rosesandbooks89/My-Weather-App",
      deployedUrl: "https://rosesandbooks89.github.io/My-Weather-App/",
    },
    {
      name: "Note Taker",
      description:
        "An application that allows the user to create, edit, and delete notes and save to local storage.",
      image: noteTaker,
      github: "https://github.com/rosesandbooks89/awesome-note-taker",
      deployedUrl: "https://awesome-notetaker-acd455f00464.herokuapp.com/",
    },
    {
      name: "Awesome Text Editor",
      description:
        " This is a PWA application that allows the user to create, edit, and delete text while offline. When the user comes back online, the text is saved to the database.",
      image: textEditor,
      github: "https://github.com/rosesandbooks89/awesome-text-editor",
      deployedUrl: "https://rosesandbooks89.github.io/My-Password-Generator/",
    },
    {
      name: "GSD",
      description:
        "A task management application that allows the user to create, edit, and delete tasks. This was a group project that I worked on with 3 other developers. This was our second project as students in the UTSA Coding Bootcamp.",
      image: gsd,
      github: "https://github.com/rosesandbooks89/GSDone",
      deployedUrl: "https://gsdone-2f10065746b9.herokuapp.com/",
    },
    {
      name: "Yass Flix",
      description:
        "A search engine for movies and where to stream them. This was a group project that I worked on with 3 other developers. This was our first project as students in the UTSA Coding Bootcamp.",
      image: yassFlix,
      github: "https://github.com/bosalinas/ShowBox",
      deployedUrl: "https://bosalinas.github.io/ShowBox/",
    },
    {
      name: "re-Memories",
      description:
        "A digital time capsule. Leave your future self a letter and image.",
      image: reMemories,
      github: "https://github.com/rosesandbooks89/re-Memories",
      deployedUrl: "http://www.re-memories-app.com/",
    },
  ];

  return (
    <section className="my-work py-5 .bg-secondary.bg-gradient" id="my-work">
      <h2 className="section_title text-center mb-4">My Work</h2>

      <div className="row justify-content-center">
        {projects.map((project) => (
          <div key={project.name} className="col-md-4 mb-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <div className="card">
              <div className="title-overlay">
                <div className="project-title fs-3 text-decoration-underline">
                  {project.name}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  Click Here to go to Repo
                </a>
                <span> | </span>
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deployed-link"
                >
                  Click here for the deployed project.
                </a>
                <span> | </span>
                <div className="card-body text-center">
                  {project.description}
                </div>
              </div>
              <img
                className="card-img-top"
                src={project.image}
                alt={project.name}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
