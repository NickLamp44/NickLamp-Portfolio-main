import React, { useEffect } from "react";
import Card from "./Card";
import Title from "../ui/Title";
import { useView } from "@/context/ViewContext";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Projects() {
  const { setSectionInView } = useView();

  const Projects = [
    {
      title: "Pokedex",
      gitLink: "#",
      liveLink: "#/",
      about:
        "A website that can be used to research and collect pokemon data. It features a search bar for finding pokemon by name, a filter for sorting by type, and a detailed view for each pokemon. The site is fully responsive and has a dark mode.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/pokedex.svg",
    },
    {
      title: "Trail Tuned",
      gitLink: "#",
      liveLink: "#/",
      about:
        "An app that helps mountain bike riders fine tune their suspension settings. It features a calculator for determining the correct suspension settings based on rider weight, bike model, and riding style. The app also includes a blog for sharing tips and tricks.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/shortly.svg",
    },
    {
      title: "Where in the world",
      gitLink: "#",
      liveLink: "#",
      about:
        "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
      stack: ["react", "react-router", "javascript", "tailwindcss"],
      img: "/witw.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {Projects.map((project, index) => (
        <Card
          key={index}
          img={project.img}
          title={project.title}
          gitLink={project.gitLink}
          liveLink={project.liveLink}
          about={project.about}
          stack={project.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
