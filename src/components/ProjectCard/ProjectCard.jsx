import React from 'react'

import "./ProjectCard.css"

function ProjectCard({project}) {
  return (
    <div className="project-container">
      <div className="project-image-container">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-card-details">
        <h3>{project.name}</h3>
        <p className="project-details">
          {project.numOfPeople} | {project.timeframe}
        </p>
        <div className="project-tech-container">
          {project.tech_stack.map((tech) => {
            return <i className={`${tech.icon} tech-icon`} key={tech.name}></i>;
          })}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-links-container">
          <a
            href={project.link}
            className="project-links"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
          <a
            href={project.readme_link}
            className="project-links"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard