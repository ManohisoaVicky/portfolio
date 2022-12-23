import React from 'react'

import "./SkillCard.css"

function SkillCard({skill}) {
  return (
    <div className="skill-container">
      <i className={`${skill.icon} skill-icon`}></i>
      <span>{skill.name}</span>
    </div>
  );
}

export default SkillCard