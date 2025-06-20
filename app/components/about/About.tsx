import React, { useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useView } from "@/context/ViewContext";

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-{150px" id="about">
      <h2 className="uppercase  antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80 ">
        I Love to Build Things
      </h2>

      {/* About section Container  */}
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className=" grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <div className="leading-[34px] mid:leading-[39px]">
            From a young age, I&apos;ve had a natural curiosity for all things
            high-tech or mechanical... Preferably both. Wheather it was
            RaceCars, Bikes, Planes, or Ipods, Computers and Game Systems it all
            had me hooked. This lifelong passion led me to explore these various
            topics throughout my time in High School. I was lucky enough to have
            access to classes in web development, where I built my first
            websites using HTML, CSS, and JavaScript. Graphic design, where we
            utilized tools such as Lightroom and Photoshop to create various
            digital works of art. Intro to Mechanics class where we learned
            first hand how to complete basic and more complex matenance tasks on
            donor cars that were in the shop. Little did i know, that initial
            taste of coding and design would plant the seed that would drive me
            to a career in Tech.
          </div>
          <div className="leading-[34px] mid:leading-[39px]">
            After high school, unsure of which path to take and feeling
            overwhelmed by options, I chose what i felt would be the safest
            route for me as I still hadnt fully become confident in my technical
            ability and understanding. I enrolled at Quinnipiac University and
            graduated 4 years later with a degree in Marketing. Yet, my
            fascination with tech never faded. Throughout college, I kept
            feeding my curiosity with classes in Internet Marketing, Python, and
            an Intro to CS course. Post College I started my professional career
            in real estate management with the Bozzuto Group. I was resposible
            for the marketing and leasing of various High Rise apartment
            communities across Boston. I enjoyed my time with Bozzuto, learned
            valuable skills and made life long friends but the drive to create
            and build was still there. It took a while but i finally realized
            that my love for building needed to be at the forefront of my
            career, so I pivoted back to tech, exploring UX/UI design, then
            front-end development, and ultimately finding my place as a
            full-stack web developer.
          </div>
          <div className="leading-[34px] mid:leading-[39px]">
            Today, I&apos;m thrilled to be combining my background in design and
            marketing with my technical skills. I&apos;ve completed a variety of
            passion projects that showcase my journey and evolving expertise.
            Web development allows me to fulfill that creative urge, blending
            problem-solving with design to build practical, user-focused
            solutions. Each project not only sharpens my skills but also keeps
            me excited about what&apos;s next in this ever-changing field.{" "}
            <br className="hidden md:block" />
            Want to lean more?
            <br className="hidden md:block" />
            <Link
              className="underline"
              href="/Nick_Lamparelli_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume.pdf"
            >
              Here is my Resume
            </Link>
          </div>
        </div>
        {/* sideBar Section */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="font-bold antialiased text-xl md:text 2xl mb-2">
              {" "}
              Front End Tools
            </p>
            <p className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+),HTML:5, CSS, Git/GitHub, CI/CD Lifecycles, React,
              BootStrap, Material Design, TailWindCSS, Next.js, MERN stack{" "}
            </p>
          </div>
          <div>
            <p className="font-bold antialiased text-xl md:text 2xl mb-2">
              {" "}
              BackEnd Tools
            </p>
            <p className="text-white/60 text-base md:text-xl leading-8">
              MongoDB, mySQL, Node.js, restful API, Vercel, Heroku{" "}
            </p>
          </div>
          <div>
            <p className="font-bold antialiased text-xl md:text 2xl mb-2">
              {" "}
              Design Tools
            </p>
            <p className="text-white/60 text-base md:text-xl leading-8">
              PhotoShop, LightRoom, Figma{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
