"use client";
import { useView } from "@/context/ViewContext";
import { useNavigation } from "@/hooks/useNavigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Header() {
  const { sectionInView } = useView();
  const { navigateTo } = useNavigation();

  const handleNavClick = (section: string) => {
    navigateTo(section);
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-10 p-3 bg-gradient-to-b from-[#0f0429]/80 to-[#380770]/0 backdrop-blur-md">
      <div className="max-w-[1223px] mx-auto flex justify-between items-center px-6 py-4">
        <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/75">
          <button
            onClick={() => handleNavClick("home")}
            className={`cursor-pointer ${
              sectionInView === "home" && "text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("work")}
            className={`cursor-pointer ${
              sectionInView === "work" && "text-white"
            }`}
          >
            Prior Experience
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className={`cursor-pointer ${
              sectionInView === "about" && "text-white"
            }`}
          >
            About
          </button>
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
  );
}
