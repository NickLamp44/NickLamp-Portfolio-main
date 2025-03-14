"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { easeIn, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useView } from "@/context/ViewContext";

export default function Hero() {
  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#9f7cc4] via-[#6354ba] to-[#6f3cc7]">
            Nick Lamparelli
          </span>
          <p>Full Stack Web Developer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
        >
          Looking for my next opportunity to create something amazing!
        </motion.p>
      </div>

      {/* IMAGE */}
      <div data-blobity-tooltip="Soft man">
        <motion.div
          ref={imgRef}
          className="flex items-center justify-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] relative overflow-hidden rounded-3xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/userPic.png"
            width={390}
            height={470}
            priority
            alt="Nick's picture"
            className="object-cover w-full h-full rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
