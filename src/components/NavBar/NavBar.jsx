import React from 'react'

import "./NavBar.css"

function NavBar({state, setState}) {

  const toAbout = () => {
    setState((state) => {
      return {
        about: true, 
        projects: false, 
        contact: false
      }
    })
  }

  const toProjects = () => {
    setState((state) => {
      return {
        about: false, 
        projects: true, 
        contact: false
      }
    })
  }

  const toContact = () => {
    setState((state) => {
      return {
        about: false, 
        projects: false, 
        contact: true
      }
    })
  }

  return (
    <nav id="navbar-container">
        <ul id="navbar-list-container">
            <li><a href="#home-section">HOME</a></li>
            <li onClick={toAbout}><a href="#about-section">ABOUT</a></li>
            <li onClick={toProjects}><a href="#projects-section">PROJECTS</a></li>
            <li onClick={toContact}><a href="#contact-section">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default NavBar