import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/hero";
import Program from "./components/Program";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="flex flex-col gap-20">
      <Nav />
      <Hero />
      <Program/>
      <About/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
    </div>
  );
};

export default App;
