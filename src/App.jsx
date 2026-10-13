import React, { useState } from 'react';
import { SpiderBackground } from './components/SpiderBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceAndEducation } from './components/ExperienceAndEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-rose-600 selection:text-white">
      {/* Interactive Spider-Verse Web Canvas & Ambient Night Layer */}
      <SpiderBackground />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <ExperienceAndEducation />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Project Architectural Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
