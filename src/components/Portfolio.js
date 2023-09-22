import React from "react";

import passwordGenerator from "../assets/Images/password-generator.png";
import weatherDashboard from "../assets/Images/weatherApp.png";
import myDailyPlanner from "../assets/Images/planner.png";
// import noteTaker from "../assets/Images/note-taker.png";
// import gsd from "../assets/Images/gsd.png";
import yassFlix from "../assets/Images/yassFlix.png";


// add 6 projects to the portfolio
function Portfolio() {
    const projects = [
        {
            name: "Password Generator",
            description: "An application that an employee can use to generate a random password based on criteria they've selected.",
            image: passwordGenerator,
            github: "",
            deployedUrl: "https://rosesandbooks89.github.io/My-Password-Generator/"
        },
        {
            name: "My Daily Planner",
            description: "An application that allows the user to save events for each hour of the working day.",
            image: myDailyPlanner,
            github: "https://github.com/rosesandbooks89/my-daily-planner",
            deployedUrl: "https://rosesandbooks89.github.io/my-daily-planner/"
        },
        {
            name: "My Weather App",
            description: "Project 3 description",
            image: weatherDashboard,
            github: "",
            deployedUrl: "https://www.google.com"
        },
       {
            name: "Note Taker",
            description: "Project 4 description",
            image: "",
            github: "",
            deployedUrl: "https://www.google.com"
        },
        {
            name: "GSD",
            description: "Project 5 description",
            image: "",
            github: "",
            deployedUrl: "https://www.google.com"
        },
        {
            name: "Yass Flix",
            description: "A search engine for movies and where to stream them. This was a group project that I worked on with 3 other developers. This was our first project as students in the UT Coding Bootcamp.",
            image: yassFlix,
            github: "https://github.com/bosalinas/ShowBox",
            deployedUrl: "https://bosalinas.github.io/ShowBox/"
       }
    ];
    
    return (
        <section className="my-work py-5" id="my-work">
            <h2 className="section_title text-center mb-4">My Work</h2>

            <div className="row justify-content-center">
                {projects.map(project => (
                    <div key={project.name} className="col-md-4 mb-4">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"></a>
                        <div className="card">
                            <div className="title-overlay">
                                <div className="project-title">{project.name}</div>
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="repo-link">Click Here to go to Repo</a>
                                <span> | </span>
                                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="deployed-link">Click here to deployed project.</a>
                                <span> | </span>
                                <div className="card-body text-center">{project.description}</div>   

                            </div>
                            <img className="card-img-top" src={project.image} alt={project.name} />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;