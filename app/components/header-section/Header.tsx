"use client";
import { useView } from "@/context/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Header() {
  const { sectionInView } = useView();

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none bg-gradient-to-r from-[#16033e] to-[#16033e]">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#1d094b] to-[#380770] mt-4 sm:mt-8 std-backdrop-blur">
          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/25">
            {" "}
            <Link
              href="#home"
              className={`${sectionInView === "home" && "text-white"} `}
            >
              Home
            </Link>
            <Link
              href="#work"
              className={`${sectionInView === "work" && "text-white"} `}
            >
              Prior Experience
            </Link>
            <Link
              href="#about"
              className={`${sectionInView === "about" && "text-white"} `}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`${sectionInView === "contact" && "text-white"} `}
            >
              Contact Me
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/nicholaslamparelli/"
            >
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link target="_blank" href="https://github.com/NickLamp44">
              <Icon icon="hugeicons:github" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
