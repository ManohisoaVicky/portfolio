import React from 'react'

import "./AboutSection.css"
import BioSection from "./BioSection/BioSection"
import ExperienceSection from "./ExperienceSection/ExperienceSection"
import InterestsSection from "./InterestsSection/InterestsSection"
import SkillsSection from './SkillsSection/SkillsSection'

function AboutSection() {
  return (
    <section id='about-section'>
      <h2>ABOUT</h2>
      <BioSection />
      <ExperienceSection />
      <InterestsSection />
      <SkillsSection />
    </section>
  )
}

export default AboutSection