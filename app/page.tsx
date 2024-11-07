"use client";
import Hero from "./components/hero/hero";
import Projects from "./components/prvExp/Projects";
import About from "./components/about/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
