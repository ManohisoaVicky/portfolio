import React from 'react'
import profilePicture from "../../assets/profilePicture.jpeg"

import "./HomeSection.css"

function HomeSection() {
  return (
    <section id="home-section">
      <div id="home-container">
        <div id="image-container">
          <img src={profilePicture} alt='profile' />
        </div>
        <div id="intro-container">
          <h1>Hi, I'm Manohisoa Rajaonarivony</h1>
          <h3>Junior Full Stack Software Developer</h3>
        </div>
      </div>
    </section>
  )
}

export default HomeSection