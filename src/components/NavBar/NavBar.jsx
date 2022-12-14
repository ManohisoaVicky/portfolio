import React from 'react'

import "./NavBar.css"

function NavBar() {
  return (
    <nav id="navbar-container">
        <ul id="navbar-list-container">
            <li><a href="#about-section">ABOUT</a></li>
            <li><a href="#projects-section">PROJECTS</a></li>
            <li><a href="#contact-section">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default NavBar