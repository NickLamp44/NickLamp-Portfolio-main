"use client";
import React from "react";
import Title from "../ui/Title";
import TimeLineItem from "./TimelineItem";

const TimelineData = [
  {
    companyImg: "/careerFoundry.svg",
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
  {
    companyImg: "/bozzuto.svg",
    jobTitle: "Real Estate Agent",
    company: "Bozzuto Management Company",
    jobType: "Full-time",
    duration: "Aug 2021 - June 2024",
    desc: [
      "Addressed and resolved resident issues, including maintenance requests, lease negotiations, and renewals, ensuring seamless operations and a high level of resident satisfaction.",
      "Conducted building tours for prospective clients and brokers, showcasing amenities and features to drive occupancy rates.",
      "Successfully onboarded new residents onto the company’s app and online portal, guiding them through processes such as making payments, reserving accommodations, submitting service requests, messaging fellow residents, and posting on bulletin boards.",
      "Frequently resolved technical errors and provided support for users facing difficulties, including those who were not tech-savvy or faced language barriers, ensuring a smooth user experience and high satisfaction levels.",
      "Conducted thorough audits of resident files, maintaining data integrity in compliance with company policies supporting efficient property management operations.",
      "Developed a deep understanding of client needs and preferences, providing tailored recommendations and solutions to meet their unique requirements.",
      "Cultivated strong relationships with residents to ease tensions around lease renewals and maintenance requests, resulting in improved resident retention.",
      "Consistently scored high on blind shop evaluations, receiving a perfect score of 105/100, reflecting exceptional customer service skills and property knowledge.",
      "chieved company-wide recognition for exceeding quarterly sales quotas on multiple occasions, demonstrating strong sales acumen and market understanding.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimeLineItem
              key={index}
              companyImg={item.companyImg}
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
