import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* Single-page app: each section has a unique background and card styling.
   Projects structure kept as requested. */

export default function App() {
  return (
    <div className="app-root">
      <NavbarComponent />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
