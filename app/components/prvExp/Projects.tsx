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
      title: "TrailTuned",
      gitLink: "https://github.com/NickLamp44/TrailTuned",
      liveLink: "https://trail-tuned.vercel.app/",
      about:
        "A progressive web app designed to run on mobile devices, tablets, and desktops. My second passion project centered around web development and bike technology. This time much more focused on the often overwhelming and mystifying dark art that is modern Mountain Bike Suspension set up. With this app I hope to ease a riders journey into dialing in their bike's suspension. Built using Next.js, database on SupaBase, and styled with typescript",
      stack: ["Next.js", "SupaBase", "TypeScript", "Tailwind"],
      img: "/trailTuned.png",
    },
    // {
    //   title: "Pike to Panzer",
    //   gitLink: "https://github.com/NickLamp44/tool-box-warz",
    //   liveLink: "https://the-bike-bench.vercel.app/",
    //   about:
    //     "History site exploring the various stages of human conflict from the medieval time of King Henry V to the early 21st century.",
    //   stack: ["React", "Material Design", "JavaScript", "SupaBase"],
    //   img: "/TBWpreview.png",
    // },
    {
      title: "NicksFlix",
      gitLink: "https://github.com/NickLamp44/nicks-flix",
      liveLink: "https://nicksflix.netlify.app/",
      about:
        "My Original project... exposed me to MongoDB, Heroku, React, Angular and so much more. Learn more about this project and explore both the React.js & Angular versions",
      stack: [
        "React",
        "Angular",
        "Javascript",
        "MongoDB",
        "Heroku",
        "API Requests",
        "Render",
        "Netlify",
      ],
      img: "/nicks-flix.png",
    },
    {
      title: "The Bike Bench",
      gitLink: "https://github.com/NickLamp44/tool-box-warz",
      liveLink: "https://the-bike-bench.vercel.app/",
      about:
        " The Bike Bench is a space for people to learn and share knowledge about everything from indexing a derailleur to rebuilding a Fork Damper. People can also show off thier custom Tool Boxes in the ShowCASE section. People eventually vote for the yearly TBB awards cullmintating in the ToolBox of the Year award.",
      stack: [
        "React",
        "Material Design",
        "JavaScript",
        "WordPress",
        "Firebase",
      ],
      img: "/TBWpreview.png",
    },

    {
      title: "Circle Up Chat Room",
      gitLink: "https://github.com/NickLamp44/chatApp",
      liveLink: "https://circleup-chatroom--nfwvfdj0ho.expo.app/",
      about:
        "Circle Up started as a bootcamp project that was instramental in my journey in becoming a full stack web developer. It was my inital exposure to amazon web services",
      stack: [
        "React Native",
        "AWS",
        "JavaScript",
        "Expo",
        "Database Management",
      ],
      img: "/CircleUp.png",
    },

    // {
    //   title: "AWS Serverless Project",
    //   gitLink: "",
    //   liveLink: "",
    //   about:
    //     "As a capstone project for a cloud computing course, I built a fully automated image resizer that processes images using AWS Lambda triggered by uploads to Amazon S3. The architecture eliminates the need for manual image handling or 24/7 server management, providing scalable, cost-effective image processing ideal for modern web apps.",
    //   stack: [
    //     "Case Study",
    //     "Cloud Computing",
    //     "Serverless",
    //     "Auto Scaling",
    //     "Load Balancing",
    //     "AWS",
    //     "EC2",
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
