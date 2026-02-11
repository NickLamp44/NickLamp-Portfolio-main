"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { projectsData } from "@/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const router = useRouter();
  const { projectId } = use(params);
  const project = projectsData.find((proj) => proj.id === projectId);

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
