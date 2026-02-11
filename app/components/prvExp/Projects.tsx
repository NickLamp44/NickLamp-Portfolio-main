import React, { useEffect } from "react";
import Card from "./Card";
import Title from "../ui/Title";
import { useView } from "@/context/ViewContext";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const { setSectionInView } = useView();
  const Projects = projectsData;

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
      <Title>What I&apos;ve built</Title>
      {Projects.map((project, index) => (
        <Card
          key={index}
          projectId={project.id}
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
