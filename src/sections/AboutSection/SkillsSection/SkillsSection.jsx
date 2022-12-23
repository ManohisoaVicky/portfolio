import React from 'react'

import SkillCard from '../../../components/SkillCard/SkillCard';
import { skills } from '../../../data/skills';
import "./SkillsSection.css"

function SkillsSection() {
  return (
    <div id="skills-section">
      <h2>Skills Section</h2>
      <div id="skills-container">
        {
          skills.map((skill) => {
            return (
              <SkillCard skill={skill} key={skill.name} />
        )
        })
        }
      </div>
    </div>
  );
}

export default SkillsSection