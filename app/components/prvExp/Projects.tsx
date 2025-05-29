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
      title: "Tool Box Wars",
      gitLink: "#",
      liveLink: "#/",
      about:
        "A website that can be used to research and collect pokemon data. It features a search bar for finding pokemon by name, a filter for sorting by type, and a detailed view for each pokemon. The site is fully responsive and has a dark mode.",
      stack: ["HTML", "CSS", "JavaScript", "API requests"],
      img: "/pokedex.png",
    },
    {
      title: "Circle Up Chat Room",
      gitLink: "#",
      liveLink: "#/",
      about:
        "A simple pong game built with React. It features a start screen, game screen, pause function, and end screen. The game is fully responsive and can be played on both desktop and mobile devices.",
      stack: ["React", "Javascript"],
      img: "/pong.png",
    },

    {
      title: "NicksFlix",
      gitLink: "#",
      liveLink: "#/",
      about:
        "A simple pong game built with React. It features a start screen, game screen, pause function, and end screen. The game is fully responsive and can be played on both desktop and mobile devices.",
      stack: [
        "Angular",
        "Javascript",
        "AWS",
        "EC2",
        "S3",
        "MongoDB",
        "Heroku",
        "Stuff",
      ],
      img: "/pong.png",
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
      <Title>What Ive built</Title>
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
