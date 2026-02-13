"use client";
import Hero from "./components/hero/hero";
import Projects from "./components/prvExp/Projects";
import About from "./components/about/About";

import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main >
      <Hero />
      <Projects />
      <About />
      
      <Footer />
    </main>
  );
}
