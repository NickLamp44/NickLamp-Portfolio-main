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
      title: "Tool Box Warz",
      gitLink: "https://github.com/NickLamp44/tool-box-warz",
      liveLink: "https://tool-box-warz.vercel.app/",
      about:
        "A personal passions project centered around my love for riding and maintaining Mountain Bikes. Its used as a space for people to learn and share knowledge about everything from indexing a derailleur to rebuilding a Fork Damper. People can also show off thier custom Tool Boxes in the ShowCASE section. People eventually vote for the yearly TBW awards cullmintating in the ToolBox of the Year award. We also have some merch for sale.",
      stack: ["React", "MaterialDesign", "JavaScript", "Firebase"],
      img: "/TBWpreview.png",
    },
    // {
    //   title: "Circle Up Chat Room",
    //   gitLink: "https://github.com/NickLamp44/chatApp",
    //   liveLink: "#/",
    //   about:
    //     "Circle Up started as a bootcamp project that was instramental in my journey in becoming a full stack web developer. It was my inital exposure to amazon web services",
    //   stack: ["React", "AWS", "JavaScript", "Vite", "Database Management"],
    //   img: "/CircleUp.png",
    // },

    {
      title: "NicksFlix",
      gitLink: "https://github.com/NickLamp44/MyFlix-Client",
      liveLink: "https://nicksflix.netlify.app/",
      about:
        "My Original project... exposed me to MongoDB, Heroku, React. Build a second version Available here using Angular ",
      stack: [
        "Angular",
        "React",
        "Javascript",
        "MongoDB",
        "Heroku",
        "API Requests",
      ],
      img: "/NicksFlix.png",
    },
    // {
    //   title: "AWS Serverless Project",
    //   gitLink: "",
    //   liveLink: "",
    //   about: "Case study ",
    //   stack: [
    //     "Cloud Computing",
    //     "Serverless",
    //     "Auto Scaling",
    //     "Load Balancing",
    //     "AWS",
    //     "S2",
    //   ],
    //   img: "/black.png",
    // },
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
      <Title>What I&apos;ve built</Title>
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
