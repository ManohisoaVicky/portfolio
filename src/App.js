import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
