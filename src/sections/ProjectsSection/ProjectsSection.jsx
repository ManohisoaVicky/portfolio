import React from "react"

import { projects } from "../../data/projects"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./ProjectsSection.css"

function ProjectsSection({state}) {

  return (
    <section
      id="projects-section"
      className={!state.projects ? "hide" : undefined}
    >
      <h2>Projects</h2>
      <div id="projects-container">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.name} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsSection