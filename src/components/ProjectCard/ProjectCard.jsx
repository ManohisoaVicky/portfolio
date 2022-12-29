import React from 'react'

import "./ProjectCard.css"

function ProjectCard({project}) {
  return (
    <div className='project-container'>
      <div className="project-image-container">
        <img src={project.image} alt={project.name} />
      </div>
    </div>
  )
}

export default ProjectCard