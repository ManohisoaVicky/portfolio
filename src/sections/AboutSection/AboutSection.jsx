import React from "react"

import "./AboutSection.css"
import BioSection from "./BioSection/BioSection"
import ExperienceSection from "./ExperienceSection/ExperienceSection"
import InterestsSection from "./InterestsSection/InterestsSection"
import SkillsSection from './SkillsSection/SkillsSection'

function AboutSection({state}) {

  return (
    <section id='about-section'  className={!state.about ? "hide" : undefined}>
      <BioSection />
      <SkillsSection />
      <ExperienceSection />
      <InterestsSection />
    </section>
  )
}

export default AboutSection