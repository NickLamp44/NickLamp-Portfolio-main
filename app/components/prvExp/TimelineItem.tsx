"use client";
import Image from "next/image";
import React from "react";
import styles from "./TimelineItem.module.css";
import { useInView } from "react-intersection-observer";

export default function TimelineItem({
  jobTitle,
  company,
  jobType,
  duration,
  desc,
}: {
  jobTitle: string;
  company: string;
  jobType: string;
  duration: string;
  desc: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 relative duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-4">
        {/* ALL THE TEXT*/}
        <div className={`${styles.timeline} col-span-4`}>
          <div className="leading-tight">
            <h1 className="text-2xl sm:text-[2rem] font-bold">{jobTitle}</h1>
            <p className="text-base sm:text-lg font-bold my-2 sm:my-3">
              {company} | {jobType}
            </p>
          </div>
          <p className="text-base sm:text-lg text-white/60 my-3">{duration}</p>

          <ul>
            {desc.map((stuff, index) => (
              <li key={index}>{stuff}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
