import React, { useState } from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";

function App() {
  const [state, setState] = useState({
    about: true,
    projects: false,
    contact: false,
  });

  return (
    <div className="App">
      <header>
        <NavBar state={state} setState={setState} />
      </header>
      <main>
        <HomeSection />
        <AboutSection state={state} setState={setState} />
        <ProjectsSection state={state} setState={setState} />
        <ContactSection state={state} setState={setState} />
      </main>
    </div>
  );
}

export default App;
