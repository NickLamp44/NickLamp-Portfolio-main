"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

// Project data moved to a shared file for easier access
const projectsData: Record<
  string,
  {
    title: string;
    gitLink: string;
    liveLink: string;
    about: string;
    stack: string[];
    img: string;
    buildProcess: string;
    challenges: string;
    keyFeatures: string[];
  }
> = {
  "trail-tuned": {
    title: "TrailTuned",
    gitLink: "https://github.com/NickLamp44/TrailTuned",
    liveLink: "https://trail-tuned.vercel.app/",
    about:
      "TrailTuned is a full-stack Progressive Web App that helps mountain bikers take a structured, data-driven approach to suspension tuning. Instead of relying on memory or scattered notes, riders can log precise fork and shock settings, track changes over time, and connect those adjustments to real-world ride data.",
    stack: ["Next.js", "SupaBase", "TypeScript", "Tailwind", "strava.api"],
    img: "/trailTuned.png",
    buildProcess:
      "Started as a passion project to solve my own mountain biking problems. I designed the database schema to handle complex suspension data, integrated with the Strava API for ride data correlation, and built the UI with Next.js and Tailwind for optimal performance on mobile devices during rides.",
    challenges:
      "The main challenge was accurately correlating suspension settings with ride performance data from Strava. I had to learn Supabase authentication and real-time database features to provide instant feedback to users.",
    keyFeatures: [
      "Real-time suspension logging",
      "Strava API integration",
      "Progressive Web App capabilities",
      "Mobile-optimized interface",
      "Data visualization",
    ],
  },
  nicksflix: {
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
    buildProcess:
      "NicksFlix was my introduction to full-stack development. I built it with both React and Angular to learn different frameworks, integrated MongoDB for persistent data storage, and deployed to both Heroku and Netlify to understand various hosting solutions. This project was instrumental in building my foundation as a full-stack developer.",
    challenges:
      "Understanding how to structure a database, manage API requests properly, and deploying to different platforms taught me valuable lessons about scalability and best practices.",
    keyFeatures: [
      "Movie database with search",
      "User ratings and reviews",
      "Multiple framework implementations",
      "Cross-platform deployment",
      "API integration",
    ],
  },
  "bike-bench": {
    title: "The Bike Bench",
    gitLink: "https://github.com/NickLamp44/tool-box-warz",
    liveLink: "https://the-bike-bench.vercel.app/",
    about:
      " The Bike Bench is a space for people to learn and share knowledge about everything from indexing a derailleur to rebuilding a Fork Damper. People can also show off thier custom Tool Boxes in the ShowCASE section. People eventually vote for the yearly TBB awards cullmintating in the ToolBox of the Year award.",
    stack: ["React", "Material Design", "JavaScript", "WordPress", "Firebase"],
    img: "/TBWpreview.png",
    buildProcess:
      "Built as a community platform for bike enthusiasts. I used Firebase for real-time database capabilities and user authentication, Material Design for a polished UI, and integrated WordPress for content management. The voting system was built with React hooks for real-time updates.",
    challenges:
      "Creating a voting system that prevents fraud and handles concurrent updates was complex. I had to implement Firebase security rules and learn about transaction handling.",
    keyFeatures: [
      "Community tool sharing",
      "Real-time voting system",
      "Knowledge base",
      "Showcase gallery",
      "Annual awards",
    ],
  },
  "circle-up": {
    title: "Circle Up Chat Room",
    gitLink: "https://github.com/NickLamp44/chatApp",
    liveLink: "https://circleup-chatroom--nfwvfdj0ho.expo.app/",
    about:
      "Circle Up started as a bootcamp project that was instramental in my journey in becoming a full stack web developer. It was my inital exposure to amazon web services",
    stack: ["React Native", "AWS", "JavaScript", "Expo", "Database Management"],
    img: "/CircleUp.png",
    buildProcess:
      "My first exposure to cloud infrastructure. Built a real-time chat application using React Native and Expo for cross-platform mobile support. Deployed the backend on AWS to learn about cloud services, databases, and scaling.",
    challenges:
      "Understanding AWS services was overwhelming at first. I had to learn about EC2 instances, databases, and how to properly architect a backend for a mobile application.",
    keyFeatures: [
      "Real-time messaging",
      "Cross-platform mobile app",
      "AWS backend",
      "User authentication",
      "Chat room creation",
    ],
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  const router = useRouter();
  const project = projectsData[params.projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="text-purple-400 hover:text-purple-300"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0315] to-[#1a0a2e] pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-8 transition-colors"
        >
          <Icon icon="line-md:chevron-left" />
          <span>Back</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden h-96 lg:h-full">
            <Image
              src={project.img || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="rounded-2xl"
            />
          </div>

          {/* Project Title and Links */}
          <div className="flex flex-col justify-start">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-white/70 mb-8">{project.about}</p>

            {/* Action Links */}
            <div className="flex gap-4 mb-8">
              <Link
                href={project.liveLink}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all"
              >
                <Icon icon="line-md:external-link" />
                <span>View Live</span>
              </Link>
              <Link
                href={project.gitLink}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
              >
                <Icon icon="mingcute:github-line" />
                <span>GitHub Repo</span>
              </Link>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-purple-300 mb-3 uppercase">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-purple-900/50 text-purple-200 border border-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Build Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Build Process */}
          <div className="lg:col-span-2 rounded-2xl p-8 bg-gradient-to-br from-[#1d094b] to-[#380770]">
            <h2 className="text-3xl font-bold mb-4">Build Process</h2>
            <p className="text-white/70 leading-relaxed">{project.buildProcess}</p>
          </div>

          {/* Challenges */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1d094b] to-[#380770]">
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <p className="text-white/70 leading-relaxed text-sm">
              {project.challenges}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1d094b] to-[#380770]">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.keyFeatures.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Icon
                  icon="line-md:checkmark-circle"
                  className="text-2xl text-purple-400 flex-shrink-0 mt-1"
                />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
