import React from 'react';
import './App.css';
import Portfolio from './Components/Portfolio/portfolio'
import ProjectsPage from './Components/ProjectsPage/projectsPage';
import ContactPage from './Components/Contact/ContactPage'
import Resume from './Components/Resume/skills'

function App() {
  return (
    <div>
      <Portfolio />
      <ProjectsPage />
      <Resume />
      <ContactPage />
    </div>
  );
}

export default App;
