import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050414] text-white overflow-x-hidden">
      
<BlurBlob
  position={{ top: "35%", left: "20%" }}
  size={{ width: "30%", height: "40%" }}
></BlurBlob>
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0
        bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),
        linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)]
        bg-[size:24px_24px]
        [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;