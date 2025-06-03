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
      gitLink: "https://github.com/NickLamp44/tool-box-warz",
      liveLink: "https://tool-box-warz.vercel.app/",
      about:
        "A personal passions project centered around my love for riding and maintaining Mountain Bikes. Its used as a space for people to learn and share knowledge about everything from indexing a derailleur to rebuilding a Fork Damper. People can also show off thier custom Tool Boxes in the ShowCASE section. People eventually vote for the yearly TBW awards cullmintating in the ToolBox of the Year award. We also have some merch for sale.",
      stack: ["React", "MaterialDesign", "JavaScript", "Firebase"],
      img: "/TBWpreview.png",
    },
    {
      title: "Circle Up Chat Room",
      gitLink: "https://github.com/NickLamp44/chatApp",
      liveLink: "#/",
      about:
        "Circle Up started as a bootcamp project that was instramental in my journey in becoming a full stack web developer. It was my inital exposure to amazon web services",
      stack: ["React", "AWS", "JavaScript", "Vite", ""],
      img: "/CircleUp.png",
    },

    {
      title: "NicksFlix",
      gitLink: "https://github.com/NickLamp44/NicksFlixAngular",
      liveLink: "#/",
      about:
        "My Original project... exposed me to MongoDB, Heroku, React & Angular",
      stack: ["Angular", "Javascript", "AWS", "EC2", "S3", "MongoDB", "Heroku"],
      img: "/NicksFlix.png",
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
