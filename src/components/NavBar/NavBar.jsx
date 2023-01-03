import React, { useState } from 'react'
import { UilBars } from "@iconscout/react-unicons";

import logo from "../../assets/logo.png"
import "./NavBar.css"

function NavBar({state, setState}) {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked((prevState) => !prevState)
  }

  const toAbout = () => {
    setState((state) => {
      return {
        about: true, 
        projects: false, 
        contact: false
      }
    })
    setClicked((prevState) => !prevState);
  }

  const toProjects = () => {
    setState((state) => {
      return {
        about: false, 
        projects: true, 
        contact: false
      }
    })
    setClicked(false);
  }

  const toContact = () => {
    setState((state) => {
      return {
        about: false, 
        projects: false, 
        contact: true
      }
    })
    setClicked(false);
  }

  return (
    <nav id="navbar-container">
      <ul
        className={
          clicked ? "navbar-list-container extended" : "navbar-list-container"
        }
      >
        <li onClick={() => setClicked(false)}>
          <a href="#home-section" className="navbar-link">
            HOME
          </a>
        </li>
        <li onClick={toAbout}>
          <a href="#about-section" className="navbar-link">
            ABOUT
          </a>
        </li>
        <li onClick={toProjects}>
          <a href="#projects-section" className="navbar-link">
            PROJECTS
          </a>
        </li>
        <li onClick={toContact}>
          <a href="#contact-section" className="navbar-link">
            CONTACT
          </a>
        </li>
      </ul>
      <ul className="mobile-nav-list-container">
        <a href="#home-section" className="navbar-link">
          <img src={logo} alt="logo" id="logo-image" />
        </a>
        <UilBars
          className={clicked ? "menu" : undefined}
          size="50"
          color="white"
          onClick={handleClick}
        />
      </ul>
    </nav>
  );
}

export default NavBar