import React from 'react'

import { experiences } from '../../../data/experiences'
import ExperienceCard from '../../../components/ExperienceCard/ExperienceCard'
import "./ExperienceSection.css"

function ExperienceSection() {
  return (
    <div id="experience-section">
      <h2>Experiences</h2>
      <div id="experience-container">
        {experiences.map((experience) => {
          return <ExperienceCard experience={experience} key={experience.duration} />;
        })}
      </div>
    </div>
  );
}

export default ExperienceSection