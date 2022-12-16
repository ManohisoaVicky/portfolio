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
            <li><a href="#home-section" className='navbar-link'>HOME</a></li>
            <li onClick={toAbout}><a href="#about-section" className='navbar-link'>ABOUT</a></li>
            <li onClick={toProjects}><a href="#projects-section" className='navbar-link'>PROJECTS</a></li>
            <li onClick={toContact}><a href="#contact-section" className='navbar-link'>CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default NavBar