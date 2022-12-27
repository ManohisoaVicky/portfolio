import React, { useState } from 'react'

import "./ExperienceCard.css"

function ExperienceCard({experience}) {

    const [isActive, setIsActive] = useState(false)

    const flipHandler = () => {
        setIsActive(!isActive)
    }

  return (
    <div className="experience-card-container">
      <div
        className={
          isActive ? "experience-card-inner flipped" : "experience-card-inner"
        }
        onClick={flipHandler}
      >
        <div className="experience-card-face front-face">
          <h3>{experience.name}</h3>
          <p>{experience.duration}</p>
        </div>
        <div className="experience-card-face back-face">
          <h3>{experience.name}</h3>
          <p>{experience.company}</p>
          <p>{experience.duration}</p>
          <p className='experience-description-container'>{experience.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard