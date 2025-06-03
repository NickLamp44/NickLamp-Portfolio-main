"use client";
import React from "react";
import Title from "../ui/Title";
import TimeLineItem from "./TimelineItem";
import cfLogo from "../../../public/cfLogo.png";

const TimelineData = [
  {
    companyImg: cfLogo,
    jobTitle: "Student",
    company: "Career Foundry",
    jobType: "Part-time",
    duration: "July 2024 - Dec 2024",
    desc: [
      "Gained expertise in front-end frameworks such as React.js, BootStrap, and Vue.js, implementing dynamic user interfaces and enhancing user experience across multiple projects.",
      "Developed a solid understanding of HTML, CSS, and JavaScript by building various web applications and designing responsive landing pages, focusing on clean and efficient code.",
      "Became proficient in full-stack technologies, including MERN (MongoDB, Express.js, React.js, Node.js).",
      "Designed and implemented databases using SQL and MongoDB for a variety of applications, such as blogs, movie apps, and real-time chat applications, ensuring data integrity and efficient storage solutions.",
      "Created full-stack web applications that feature seamless front-end interfaces and robust back-end services, applying RESTful API principles for data communication.",
      "Learned and applied coding best practices, including modular design, responsive design principles, and Agile development methodologies, to ensure high-quality code and efficient workflows.",
      "Gained experience deploying web applications on cloud platforms like Heroku and  ensuring accessibility and scalability of web projects.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimeLineItem
              key={index}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
