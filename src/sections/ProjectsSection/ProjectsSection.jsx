import React from "react"

import "./ProjectsSection.css"

function ProjectsSection({state}) {

  return (
    <section id="projects-section" className={!state.projects ? "hide" : undefined}>
      <h2>PROJECTS</h2>
    </section>
  )
}

export default ProjectsSection